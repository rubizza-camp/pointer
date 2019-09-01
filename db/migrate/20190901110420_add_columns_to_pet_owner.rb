class AddColumnsToPetOwner < ActiveRecord::Migration[5.2]
  def change
    add_column :pet_owners, :first_name, :string
    add_column :pet_owners, :last_name, :string
    add_column :pet_owners, :metro, :string
    add_column :pet_owners, :phone, :text
  end
end
