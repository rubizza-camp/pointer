class AddNameToPets < ActiveRecord::Migration[5.2]
  def change
    add_column :pets, :name, :string, null: false, default: ''
  end
end
