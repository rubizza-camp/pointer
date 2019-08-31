# frozen_string_literal: true

class StaticPagesController < ApplicationController
  def home
    authorize :static_page
  end
end
