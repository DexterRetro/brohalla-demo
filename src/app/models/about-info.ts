export interface AboutInfo {
  MainHeader: String;
  Icon: String;
  InbedLogo: Boolean;
  Info: [
    {
      SubHeader: String;
      SubParagraph: String;
      SubInfo: [
        {
          Header: String;
          Info: [String];
        }
      ];
    }
  ];
}
