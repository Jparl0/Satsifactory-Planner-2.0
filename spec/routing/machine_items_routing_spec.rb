require "rails_helper"

RSpec.describe MachineItemsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/machine_items").to route_to("machine_items#index")
    end

    it "routes to #show" do
      expect(get: "/machine_items/1").to route_to("machine_items#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/machine_items").to route_to("machine_items#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/machine_items/1").to route_to("machine_items#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/machine_items/1").to route_to("machine_items#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/machine_items/1").to route_to("machine_items#destroy", id: "1")
    end
  end
end
