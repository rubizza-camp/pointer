class AddNameToPetOwners < ActiveRecord::Migration[5.2]
  def change
    add_column :pet_owners, :name, :string
  end
end
