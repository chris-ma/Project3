class CreateManagements < ActiveRecord::Migration
  def change
    create_table :managements do |t|
      t.string :name
      t.string :description
      t.timestamps null: false
    end
  end
end
