(function(window, undefined) {
  var dictionary = {
    "d9b158a9-81fd-4bb0-b705-6edbccbd9b2e": "Return_Success",
    "03ce5c8f-02ed-418f-954a-fd72e7e23dd1": "Start",
    "4c6ad609-3bd9-4085-ab2f-d551955b4f75": "Return_Choose_Terminal_2",
    "227ac55c-0a73-4c1a-bb18-59fef7bc6b84": "Home_Active",
    "fe512ffa-f4fc-4a88-9338-e24bc327cbc3": "Return_Choose_Terminal",
    "2b8a1b05-e367-417f-8fb7-03f4fdb8d3ab": "Unlock_Success",
    "c5cf37c3-b3d9-420e-89bc-bf5b91ddda3b": "Unlock_Confirm",
    "c4ddcc56-f81e-44dc-b701-10bdf40a2af5": "Unlock_Pick_A_Bike",
    "bd827c97-10f2-4b4e-a043-8cad717fdc18": "Unlock_Choose_Terminal",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);