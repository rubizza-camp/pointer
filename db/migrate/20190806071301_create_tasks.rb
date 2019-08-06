# frozen_string_literal: true

class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.belongs_to :pet
      t.belongs_to :user
      t.datetime :start_date
      t.datetime :end_date
      t.string :description, null: false
      t.timestamps
    end
  end
end
