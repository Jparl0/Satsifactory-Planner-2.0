# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

 puts "deleting seeds"
# dependent models
BoardOre.destroy_all
BoardItem.destroy_all
MachineOre.destroy_all
MachineItem.destroy_all
Board.destroy_all

# independent models
Item.destroy_all
Ore.destroy_all
Machine.destroy_all
User.destroy_all

puts "creating seeds"
# independent models
billy = User.create(name: "Bill", username: "BillyTheAdult", email: "willythekid@yahoo.com", password: "Basketball")
frank = User.create(name: "Frank", username: "FrankyFrank", email: "frankyfrank@yahoo.com", password: "12abc")
john = User.create(name: "John", username: "JohnnyDumb", email: "Jahn@yahoo.com", password: "Password")

ironPlate = Item.create(name: "ironPlate", ore_base: "iron", ore_required: 15 )
copperPlate = Item.create(name: "copperPlate", ore_base: "copper", ore_required: 25)
ironRod = Item.create(name: "ironRod", ore_base: "iron", ore_required: 10)

iron1 = Ore.create(name: "Iron ore", ore_type: "iron", purity_level: "normal")
iron2 = Ore.create(name: "Iron ore", ore_type: "iron", purity_level: "pure")
iron3 = Ore.create(name: "Iron ore", ore_type: "iron", purity_level: "impure")
copper1 = Ore.create(name: "Copper ore", ore_type: "copper", purity_level: "impure")
copper2 = Ore.create(name: "Copper ore", ore_type: "copper", purity_level: "normal")
copper3 = Ore.create(name: "Copper ore", ore_type: "copper", purity_level: "pure")
limestone1 = Ore.create(name: "Limestone ore", ore_type: "limestone", purity_level: "pure")
limestone2 = Ore.create(name: "Limestone ore", ore_type: "limestone", purity_level: "normal")
limestone3 = Ore.create(name: "Limestone ore", ore_type: "limestone", purity_level: "impure")

miner = Machine.create(name: "Miner", voltage: 20, input: 30, output: 15)
assembler = Machine.create(name: "Assembler", voltage: 30, input: 15, output: 5)
constructor = Machine.create(name: "Constructor", voltage: 25, input: 0, output: 10)

# dependent models
board1 = Board.create(name: "Billy's 1st", user_id: billy.id)
board2 = Board.create(name: "Frank's 1st", user_id: frank.id)
board3 = Board.create(name: "John's 1st", user_id: john.id)
board4 = Board.create(name: "Billy's 2nd Board", user_id: billy.id)

BoardOre.create(ore_amount: 10, board_id: board1.id, ore_id: iron1.id)
BoardOre.create(ore_amount: 15, board_id: board2.id, ore_id: iron2.id)
BoardOre.create(ore_amount: 12, board_id: board3.id, ore_id: copper1.id)
BoardOre.create(ore_amount: 20, board_id: board4.id, ore_id: copper3.id)
BoardOre.create(ore_amount: 8, board_id: board1.id, ore_id: copper2.id)
BoardOre.create(ore_amount: 17, board_id: board2.id, ore_id: copper3.id)
BoardOre.create(ore_amount: 19, board_id: board3.id, ore_id: iron3.id)
BoardOre.create(ore_amount: 200, board_id: board4.id, ore_id: iron1.id)

BoardItem.create(item_amount: 20, board_id: board1.id, item_id: ironPlate.id)
BoardItem.create(item_amount: 25, board_id: board2.id, item_id: copperPlate.id)
BoardItem.create(item_amount: 10, board_id: board3.id, item_id: ironRod.id)
BoardItem.create(item_amount: 15, board_id: board4.id, item_id: ironRod.id)

MachineItem.create(is_active: true, input_amount: 0, output_amount: 0, board_id: board1.id, item_id: ironPlate.id, machine_id: miner.id)
MachineItem.create(is_active: true, input_amount: 0, output_amount: 0, board_id: board3.id, item_id: copperPlate.id, machine_id: assembler.id)
MachineItem.create(is_active: false, input_amount: 0, output_amount: 0, board_id: board2.id, item_id: ironRod.id, machine_id: constructor.id)
MachineItem.create(is_active: true, input_amount: 0, output_amount: 0, board_id: board2.id, item_id: ironPlate.id, machine_id: constructor.id)

MachineOre.create(ore_mined: 5, board_id: board1.id, ore_id: iron1.id, machine_id: miner.id)
MachineOre.create(ore_mined: 10, board_id: board2.id, ore_id: iron2.id, machine_id: assembler.id)
MachineOre.create(ore_mined: 25, board_id: board3.id, ore_id: copper1.id, machine_id: constructor.id)
MachineOre.create(ore_mined: 8, board_id: board4.id, ore_id: copper2.id, machine_id: assembler.id)

