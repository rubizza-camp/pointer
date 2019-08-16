# frozen_string_literal: true

class ReviewsController < ApplicationController
  before_action :find_reviewable
  def new
    @review = @reviewable.reviews.new
  end

  def create
    @review = @reviewable.reviews.new(review_params)
    if @review.save
      redirect_to [@reviewable, :reviews], notice: 'review created'
    else
      format.html { render :new }
      format.json { render json: @review.errors, status: :unprocessable_entity }
    end
  end

  def destroy
  end

  def index
    @reviews = @reviewable.reviews
  end

  private
    def find_reviewable
      resource, id = request.path.split('/')[1, 2]
      @reviewable = resource.singularize.classify.constantize.find(id)
    end

    def review_params
      params.require(:review).permit!
    end
end
