class AddColumnsToHandler < ActiveRecord::Migration[5.2]
  def change
    add_column :handlers, :first_name, :string
    add_column :handlers, :last_name, :string
    add_column :handlers, :metro, :string
    add_column :handlers, :phone, :text
  end
end
