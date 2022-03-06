class Traveler {
  constructor(travelerData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
    this.thisYearsTrips = [];
    this.previousYearsTrips = [];
  };
};

export default Traveler;
