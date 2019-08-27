class AddColumnsToHandler < ActiveRecord::Migration[5.2]
  def change
    add_column :handlers, :name, :string
    add_column :handlers, :metro, :string
    add_column :handlers, :description, :text
  end
end
