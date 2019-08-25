# frozen_string_literal: true

class ReviewsController < ApplicationController
  before_action :find_reviewable
  skip_before_action :verify_authenticity_token

  def index
    @reviews = @reviewable.reviews
    render json: ReviewSerializer.new(@reviews).serialized_json
  end

  def new
    @review = @reviewable.reviews.new
  end

  def create
    current_user = User.first
    @review = @reviewable.reviews.new(review_params.merge(user: current_user))
    @review.rating = 5
    if @review.save
      render json: ReviewSerializer.new(@review).serialized_json, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    head :no_content
  end

  private
  def find_reviewable
    resource, id = request.path.split('/')[1, 2]
    @reviewable = resource.singularize.classify.constantize.find(id)
  end

  def review_params
    params.require(:review).permit(:rating, :comment, :reviewable_type, :reviewable_id)
  end
end
