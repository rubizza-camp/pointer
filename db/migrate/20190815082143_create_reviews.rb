# frozen_string_literal: true

class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :comment
      t.integer :rating
      t.references :reviewable, polymorphic: true, index: true
      t.references :reviewerable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
