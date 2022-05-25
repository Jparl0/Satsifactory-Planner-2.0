# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_05_21_015714) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "board_items", force: :cascade do |t|
    t.integer "item_amount"
    t.bigint "board_id", null: false
    t.bigint "item_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["board_id"], name: "index_board_items_on_board_id"
    t.index ["item_id"], name: "index_board_items_on_item_id"
  end

  create_table "board_ores", force: :cascade do |t|
    t.integer "ore_amount"
    t.bigint "board_id", null: false
    t.bigint "ore_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["board_id"], name: "index_board_ores_on_board_id"
    t.index ["ore_id"], name: "index_board_ores_on_ore_id"
  end

  create_table "boards", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_boards_on_user_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.string "ore_base"
    t.integer "ore_required"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "machine_items", force: :cascade do |t|
    t.boolean "is_active"
    t.integer "input_amount"
    t.integer "output_amount"
    t.bigint "board_id", null: false
    t.bigint "item_id", null: false
    t.bigint "machine_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["board_id"], name: "index_machine_items_on_board_id"
    t.index ["item_id"], name: "index_machine_items_on_item_id"
    t.index ["machine_id"], name: "index_machine_items_on_machine_id"
  end

  create_table "machine_ores", force: :cascade do |t|
    t.integer "ore_mined"
    t.bigint "board_id", null: false
    t.bigint "ore_id", null: false
    t.bigint "machine_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["board_id"], name: "index_machine_ores_on_board_id"
    t.index ["machine_id"], name: "index_machine_ores_on_machine_id"
    t.index ["ore_id"], name: "index_machine_ores_on_ore_id"
  end

  create_table "machines", force: :cascade do |t|
    t.string "name"
    t.integer "voltage"
    t.integer "input"
    t.integer "output"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ores", force: :cascade do |t|
    t.string "name"
    t.string "ore_type"
    t.string "purity_level"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "board_items", "boards"
  add_foreign_key "board_items", "items"
  add_foreign_key "board_ores", "boards"
  add_foreign_key "board_ores", "ores"
  add_foreign_key "boards", "users"
  add_foreign_key "machine_items", "boards"
  add_foreign_key "machine_items", "items"
  add_foreign_key "machine_items", "machines"
  add_foreign_key "machine_ores", "boards"
  add_foreign_key "machine_ores", "machines"
  add_foreign_key "machine_ores", "ores"
end
