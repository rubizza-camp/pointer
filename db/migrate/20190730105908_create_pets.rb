# frozen_string_literal: true

class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.references :pet_owner, index: true

      t.timestamps
    end
  end
end
