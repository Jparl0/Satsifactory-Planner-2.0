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
billy = User.create(name: "Bill", username: "BillTheAdult", email: "willythekid@yahoo.com", password: "Basket")
frank = User.create(name: "Frank", username: "FrankyFrank", email: "frankyfrank@yahoo.com", password: "12abc")
john = User.create(name: "John", username: "Johnny", email: "Jahn@yahoo.com", password: "Password")

ironPlate = Item.create(name: "ironPlate", ore_base: "Iron", ore_required: 15 )
copperPlate = Item.create(name: "copperPlate", ore_base: "Copper", ore_required: 25)
ironRod = Item.create(name: "ironRod", ore_base: "Iron", ore_required: 10)

iron1 = Ore.create(name: "Iron Ore", ore_type: "Iron", purity_level: "normal", purity_multiplier: 1.0)
iron2 = Ore.create(name: "Pure Iron Ore", ore_type: "Iron", purity_level: "pure", purity_multiplier: 1.5)
iron3 = Ore.create(name: "Impure Iron Ore", ore_type: "Iron", purity_level: "impure", purity_multiplier: 0.5)
copper1 = Ore.create(name: "Copper Ore", ore_type: "Copper", purity_level: "normal", purity_multiplier: 1.0)
copper2 = Ore.create(name: "Pure Copper Ore", ore_type: "Copper", purity_level: "pure", purity_multiplier: 1.5)
copper3 = Ore.create(name: "Impure Copper Ore", ore_type: "Copper", purity_level: "impure", purity_multiplier: 0.5)
limestone1 = Ore.create(name: "Limestone Ore", ore_type: "Limestone", purity_level: "normal", purity_multiplier: 1.0)
limestone2 = Ore.create(name: "Pure Limestone Ore", ore_type: "Limestone", purity_level: "pure", purity_multiplier: 1.5)
limestone3 = Ore.create(name: "Impure Limestone Ore", ore_type: "Limestone", purity_level: "impure", purity_multiplier: 0.5)

miner1 = Machine.create(name: "Miner", voltage: 5, input: 0, output: 60, multiplier: 1)
miner2 = Machine.create(name: "Miner Mk.2", voltage: 12, input: 0, output: 120, multiplier: 1)
miner3 = Machine.create(name: "Miner Mk.3", voltage: 30, input: 0, output: 240, multiplier: 1)
smelter = Machine.create(name: "Smelter", voltage: 50, input: 0, output: 60, multiplier: 1, input_resource1: "")
assembler = Machine.create(name: "Assembler", voltage: 30, input: 0, output: 60, multiplier: 1, input_resource1: "iron")

# dependent models
board1 = Board.create(name: "Bill's 1st", user_id: billy.id)
board2 = Board.create(name: "Frank's 1st", user_id: frank.id)
board3 = Board.create(name: "John's 1st", user_id: john.id)
board4 = Board.create(name: "Bill's 2nd Board", user_id: billy.id)

BoardOre.create(ore_amount: 100, board_id: board1.id, ore_id: iron1.id)
BoardOre.create(ore_amount: 150, board_id: board2.id, ore_id: iron2.id)
BoardOre.create(ore_amount: 120, board_id: board3.id, ore_id: copper1.id)
BoardOre.create(ore_amount: 200, board_id: board4.id, ore_id: copper3.id)
BoardOre.create(ore_amount: 80, board_id: board1.id, ore_id: copper2.id)
BoardOre.create(ore_amount: 170, board_id: board2.id, ore_id: copper3.id)
BoardOre.create(ore_amount: 190, board_id: board3.id, ore_id: iron3.id)
irontracker1 = BoardOre.create(ore_amount: 200, board_id: board4.id, ore_id: iron1.id)

BoardItem.create(item_amount: 20, board_id: board1.id, item_id: ironPlate.id)
BoardItem.create(item_amount: 25, board_id: board2.id, item_id: copperPlate.id)
BoardItem.create(item_amount: 10, board_id: board3.id, item_id: ironRod.id)
BoardItem.create(item_amount: 15, board_id: board4.id, item_id: ironRod.id)

MachineOre.create(ore_mined: 0, MO_name: "Iron Ore-Miner", board_id: board2.id, ore_id: iron1.id, machine_id: miner1.id)
MachineOre.create(ore_mined: 0, MO_name: "Pure Iron Ore-Miner Mk.2", board_id: board1.id, ore_id: iron2.id, machine_id: miner2.id)
MachineOre.create(ore_mined: 0, MO_name: "Copper Ore-Miner Mk.2", board_id: board3.id, ore_id: copper1.id, machine_id: miner2.id)
MachineOre.create(ore_mined: 0, MO_name: "Impure Copper Ore-Miner Mk.3", board_id: board4.id, ore_id: copper3.id, machine_id: miner3.id)
MachineOre.create(ore_mined: 0, MO_name: "Pure Iron Ore-Miner", board_id: board1.id, ore_id: copper2.id, machine_id: miner1.id)

MachineItem.create(is_active: true, MI_name: "Iron Ore Miner1", input_amount: 0, output_amount: 0, board_id: board1.id, item_id: ironPlate.id, machine_id: miner1.id)
MachineItem.create(is_active: true, MI_name: "Iron Ore Miner1", input_amount: 0, output_amount: 0, board_id: board3.id, item_id: copperPlate.id, machine_id: miner2.id)
MachineItem.create(is_active: false, MI_name: "Iron Ore Miner1", input_amount: 0, output_amount: 0, board_id: board2.id, item_id: ironRod.id, machine_id: miner3.id)
MachineItem.create(is_active: true, MI_name: "Iron Ore Miner1", input_amount: 0, output_amount: 0, board_id: board2.id, item_id: ironPlate.id, machine_id: miner3.id, board_ore_id: irontracker1.id)
