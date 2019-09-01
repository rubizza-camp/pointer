class AddRatingToReviewable < ActiveRecord::Migration[5.2]
  def change
    add_column :pets, :rating, :integer, null: false, default: 5
    add_column :handlers, :rating, :integer, null: false, default: 5
    add_column :pet_owners, :rating, :integer, null: false, default: 5
  end
end
