require "rails_helper"

RSpec.describe BoardItemsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/board_items").to route_to("board_items#index")
    end

    it "routes to #show" do
      expect(get: "/board_items/1").to route_to("board_items#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/board_items").to route_to("board_items#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/board_items/1").to route_to("board_items#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/board_items/1").to route_to("board_items#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/board_items/1").to route_to("board_items#destroy", id: "1")
    end
  end
end
