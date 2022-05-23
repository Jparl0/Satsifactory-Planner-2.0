class MachineSerializer < ActiveModel::Serializer
  attributes :id, :name, :voltage, :input, :output
end
