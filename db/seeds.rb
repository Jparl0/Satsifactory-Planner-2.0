# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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


# independent models
billy = User.create(name: "Bill", username: "BillyTheAdult", email: "willythekid@yahoo.com", password: "Basketball")
frank = User.create(name: "Frank", username: "FrankyFrank", email: "frankyfrank@yahoo.com", password: "12abc")
john = User.create(name: "John", username: "JohnnyDumb", email: "Jahn@yahoo.com", password: "Password")

ironPlate = Item.create(name: "ironPlate")
copperPlate = Item.create(name: "copperPlate")
ironRod = Item.create(name: "ironRod")

iron1 = Ore.create(name: "Iron ore", ore_type: "iron", purity_level: "normal")
iron2 = Ore.create(name: "Iron ore", ore_type: "iron", purity_level: "pure")
copper1 = Ore.create(name: "Copper ore", ore_type: "copper", purity_level: "impure")

miner = Machine.create(name: "Miner", voltage: 20, input: 30, output: 15)
assembler = Machine.create(name: "Assembler", voltage: 30, input: 15, output: 5)
constructor = Machine.create(name: "Constructor", voltage: 20, input: 0, output: 10)

# dependent models
board1 = Board.create(name: "board1", user_id: billy.id)
board2 = Board.create(name: "board2", user_id: frank.id)
board3 = Board.create(name: "board3", user_id: john.id)

BoardOre.create(board_id: board1.id, ore_id: iron1.id)
BoardOre.create(board_id: board2.id, ore_id: iron2.id)
BoardOre.create(board_id: board3.id, ore_id: copper1.id)

BoardItem.create(board_id: board1.id, item_id: ironPlate.id)
BoardItem.create(board_id: board2.id, item_id: copperPlate.id)
BoardItem.create(board_id: board3.id, item_id: ironRod.id)
 
MachineItem.create(item_id: ironPlate.id, machine_id: miner.id)
MachineItem.create(item_id: copperPlate.id, machine_id: assembler.id)
MachineItem.create(item_id: ironRod.id, machine_id: constructor.id)

MachineOre.create(board_id: board1.id, ore_id: iron1.id, machine_id: miner.id)
MachineOre.create(board_id: board2.id, ore_id: iron2.id, machine_id: assembler.id)
MachineOre.create(board_id: board3.id, ore_id: copper1.id, machine_id: constructor.id)


