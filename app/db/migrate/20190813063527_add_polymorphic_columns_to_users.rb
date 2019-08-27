# frozen_string_literal: true

class AddPolymorphicColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :userable_id, :integer
    add_column :users, :userable_type, :string
    add_index :users, [:userable_type, :userable_id]
  end
end
