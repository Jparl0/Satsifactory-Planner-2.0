require "rails_helper"

RSpec.describe MachineOresController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/machine_ores").to route_to("machine_ores#index")
    end

    it "routes to #show" do
      expect(get: "/machine_ores/1").to route_to("machine_ores#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/machine_ores").to route_to("machine_ores#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/machine_ores/1").to route_to("machine_ores#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/machine_ores/1").to route_to("machine_ores#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/machine_ores/1").to route_to("machine_ores#destroy", id: "1")
    end
  end
end
