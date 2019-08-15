class CreatePetOwners < ActiveRecord::Migration[5.2]
  def change
    create_table :pet_owners do |t|

      t.timestamps
    end
  end
end
