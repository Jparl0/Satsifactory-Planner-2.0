require "rails_helper"

RSpec.describe OresController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/ores").to route_to("ores#index")
    end

    it "routes to #show" do
      expect(get: "/ores/1").to route_to("ores#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/ores").to route_to("ores#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/ores/1").to route_to("ores#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/ores/1").to route_to("ores#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/ores/1").to route_to("ores#destroy", id: "1")
    end
  end
end
