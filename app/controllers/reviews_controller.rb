# frozen_string_literal: true

class ReviewsController < ApplicationController
  before_action :find_reviewable

  def index
    @reviews = policy_scope(@reviewable.reviews).order('id DESC')
    render json: ReviewSerializer.new(@reviews, include: [:user]).serialized_json
  end

  def create
    authorize :review
    @review = @reviewable.reviews.new(review_params.merge(user: current_user))
    if @review.save
      @reviewable.refresh_rating
      render json: ReviewSerializer.new(@review, include: [:user, :reviewable]).serialized_json, status: :created
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
