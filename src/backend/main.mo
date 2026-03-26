import Text "mo:core/Text";
import Runtime "mo:core/Runtime";

actor {
  type SiteInfo = {
    artistName : Text;
    greetingMessage : Text;
  };

  var artistName = "Artist Name";
  var greetingMessage = "Welcome to my portfolio website!";

  public query ({ caller }) func getSiteInfo() : async SiteInfo {
    {
      artistName;
      greetingMessage;
    };
  };

  public shared ({ caller }) func setSiteInfo(artistNameInput : Text, greetingMessageInput : Text) : async () {
    if (artistNameInput.isEmpty()) { Runtime.trap("Artist name cannot be empty!") };
    artistName := artistNameInput;
    greetingMessage := greetingMessageInput;
  };
};
