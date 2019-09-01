class AddFieldToPets < ActiveRecord::Migration[5.2]
  def change
    add_column :pets, :name, :string
    add_column :pets, :breed, :string
    add_column :pets, :times, :text, array: true, default: []
  end
end
