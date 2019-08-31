class AddPetOnwerToPets < ActiveRecord::Migration[5.2]
  def change
    add_reference :pets, :pet_owner, foreign_key: true
  end
end
