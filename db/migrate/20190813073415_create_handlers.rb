# frozen_string_literal: true

class CreateHandlers < ActiveRecord::Migration[5.2]
  def change
    create_table :handlers do |t|
      t.timestamps
    end
  end
end
