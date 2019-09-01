class AddPetToTasks < ActiveRecord::Migration[5.2]
  def change
    add_reference :tasks, :pet, foreign_key: true
  end
end
