BloodType = {

  AB_POS : "AB_POS",
  AB_NEG : "AB_NEG",
  A_POS  : "A_POS",
  A_NEG  : "A_NEG",
  B_POS  : "B_POS",
  B_NEG  : "B_NEG",
  O_POS  : "O_POS",
  O_NEG  : "O_NEG"

};

BloodTransfusionRules = {

  /**
   * Set the simulation speed.
   * @type {Number} : Valid values between 1 and 200
   */
  simulation_speed : 90,

  /**
   * returns BloodType, or false to give no BloodType
   *
   * @name receive_patient
   * @param {Bank} blood_inventory
   * @param {Patient} patient
   * @returns {BloodType or false}
   *
   * Patient properties {
   *   gender : String, (MALE,FEMALE)
   *   blood_type : String (BloodType)
   * }
   *
   * Bank properties {
   *   AB_POS : Integer,
   *   AB_NEG : Integer,
   *   A_POS  : Integer,
   *   A_NEG  : Integer,
   *   B_POS  : Integer,
   *   B_NEG  : Integer,
   *   O_POS  : Integer,
   *   O_NEG  : Integer
   * }
   *
   */

  receive_patient : function (blood_inventory, patient) {

    if(patient.blood_type === "O_NEG" ){
      return BloodType.O_NEG ;
    }

    if(patient.blood_type === "O_POS"){

      let OP_inventory = Object.values(blood_inventory).filter(function(el,index){return index === 6 || index === 7;});

      return [
        BloodType.O_POS,
        BloodType.O_NEG
        ][O_inventory.indexOf(Math.max(...O_inventory))] ;
    }

    if(patient.blood_type === "AB_POS"){

      let ABP_Inventory = Object.values(blood_inventory);

        return [
        BloodType.AB_POS,
        BloodType.AB_NEG,
        BloodType.A_POS,
        BloodType.A_NEG,
        BloodType.B_POS,
        BloodType.B_NEG,
        BloodType.O_POS,
        BloodType.O_NEG
      ][ABP_Inventory.indexOf(Math.max(...ABP_Inventory))];
    }

    if(patient.blood_type === "AB_NEG"){

      let AB_Inventory = Object.values(blood_inventory).filter(function(el,index){return index === 1 || index === 3 || index === 5 || index === 7;});

        return [
        BloodType.AB_NEG,
        BloodType.A_NEG,
        BloodType.B_NEG,
        BloodType.O_NEG
        ][AB_Inventory.indexOf(Math.max(...AB_Inventory))];
    }

    if(patient.blood_type === "A_POS"){

      let AP_Inventory = Object.values(blood_inventory).filter(function(el,index){return index === 2 || index === 3 || index === 6 || index === 7;});

        return [
        BloodType.A_POS,
        BloodType.A_NEG,
        BloodType.O_POS,
        BloodType.O_NEG
      ][AP_Inventory.indexOf(Math.max(...AP_Inventory))];
    }

    if(patient.blood_type === "A_NEG"){

      let AN_Inventory = Object.values(blood_inventory).filter(function(el,index){return index === 3 || index === 7;});

        return [
        BloodType.A_NEG,
        BloodType.O_NEG
      ][AN_Inventory.indexOf(Math.max(...AN_Inventory))];
    }

    if(patient.blood_type === "B_POS"){

      let BP_Inventory = Object.values(blood_inventory).filter(function(el,index){return index === 4 || index === 5 || index === 6 || index === 7;});

        return [
        BloodType.B_POS,
        BloodType.B_NEG,
        BloodType.O_POS,
        BloodType.O_NEG
      ][BP_Inventory.indexOf(Math.max(...BP_Inventory))];
    }

    if(patient.blood_type === "B_NEG"){

      let BN_Inventory = Object.values(blood_inventory).filter(function(el,index){return index === 5 || index === 7;});

        return [
        BloodType.B_NEG,
        BloodType.O_NEG
      ][BN_Inventory.indexOf(Math.max(...BN_Inventory))];
    }

  },


};

