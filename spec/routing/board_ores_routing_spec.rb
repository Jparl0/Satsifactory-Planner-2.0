require "rails_helper"

RSpec.describe BoardOresController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/board_ores").to route_to("board_ores#index")
    end

    it "routes to #show" do
      expect(get: "/board_ores/1").to route_to("board_ores#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/board_ores").to route_to("board_ores#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/board_ores/1").to route_to("board_ores#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/board_ores/1").to route_to("board_ores#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/board_ores/1").to route_to("board_ores#destroy", id: "1")
    end
  end
end
