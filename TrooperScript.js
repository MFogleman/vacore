$(document).ready(function(){
	startScreen();
});

function startScreen(){ //Main menu called on first page load
	$(".output").html("");
	trafficCodes();
	//$(".output").append('<div class="box codeSectionsButton">Code Sections</div>'); 
	// $(".output").append('<div class="box courtInfoButton">Court Info</div>'); not impliemented yet
	// $(".output").append('<div class="box duiInfoButton">DUI Info</div>');  not implemented yet
	

	$(".backButton").click(trafficCodes);
	$(".codeSectionsButton").click(codeSections);
	$(".trafficButton").click(trafficCodes);
	$(".criminalButton").click(criminalCodes);
	$(".cmvButton").click(cmvCodes);
	$(".startScreenButton").click(startScreen);

	// $(".courtInfoButton").click(courtInfo);
	// $(".duiInfoButton").click(duiInfo);

};

function codeSections(){
	$(".output").html('<div class="box trafficButton">Traffic Codes</div>');
	$(".output").append('<div class="box criminalButton">Criminal Codes</div>');
	$(".output").append('<div class="box cmvButton">CMV Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');
};

/**********************
Begin Codes Subsections
***********************/
function trafficCodes(){
	$(".output").html('<div class="box alcoholButton">Alcohol</div>');
	$(".output").append('<div class="box dliButton">Driver\'s License and Insurance</div>');
	$(".output").append('<div class="box equipmentButton">Equipment</div>');
	$(".output").append('<div class="box inspectionButton">Inspection</div>');
	$(".output").append('<div class="box lightsButton"> Lights</div>');
	$(".output").append('<div class="box miscTrafficButton">Misc Traffic / Rules of Road</div>');
	$(".output").append('<div class="box motorcycleButton">Motorcycles, Mopes, Bicycles, ATVs, etc</div>');
	$(".output").append('<div class="box parkingButton">Parking and Stopping</div>');
	$(".output").append('<div class="box passingButton">Passing</div>');
	$(".output").append('<div class="box pedestrianButton">Pedestrians</div>');
	$(".output").append('<div class="box recklessButton">Reckless Driving</div>');
	$(".output").append('<div class="box registrationButton">Registration</div>');
	$(".output").append('<div class="box rightOfWayButton">Right of Way and Turning</div>');
	$(".output").append('<div class="box busButton">School Buses and Seatbelts</div>');
	$(".output").append('<div class="box seatbeltButton">Seat and Seatbelts</div>');
	$(".output").append('<div class="box signalButton">Signs and Signals</div>');
	$(".output").append('<div class="box sizeButton">Size and Weight</div>');
	$(".output").append('<div class="box speedingButton">Speeding</div>');
	$(".output").append('<div class="box truckButton">Trucks, Towing, Hauling</div>');
	$(".output").append('<div class="box farmButton">Farm Use</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');

	$(".alcoholButton").click(alcohol)
	$(".dliButton").click(dli)
	$(".equipmentButton").click(equipment)
	$(".inspectionButton").click(inspection)
	$(".lightsButton").click(lights)
	$(".miscTrafficButton").click(miscTraffic)
	$(".motorcycleButton").click(motorcycle)
	$(".parkingButton").click(parking)
	$(".passingButton").click(passing)
	$(".pedestrianButton").click(pedestrian)
	$(".recklessButton").click(reckless)
	$(".registrationButton").click(registration)
	$(".rightOfWayButton").click(rightOfWay)
	$(".busButton").click(bus)
	$(".seatbeltButton").click(seatbelt)
	$(".signalButton").click(signal)
	$(".sizeButton").click(size)
	$(".speedingButton").click(speeding)
	$(".truckButton").click(truck)
	$(".farmButton").click(farm)
	$(".startScreenButton").click(startScreen);		
};

/**********************
Begin Traffic Subsections
***********************/
function alcohol(){
	$(".output").html('<div class="box codeButton closedBox">Drinking in Public [4.1-308]</div>');
	$(".output").append('<div class="box codeButton closedBox">Drinking while Driving / Open Container [18.2-323.1]</div>');
	$(".output").append('<div class="box codeButton closedBox">DUI Under 21 years old, 0.2-0.7 BAC [18.2-266.1]</div>');
	$(".output").append('<div class="box codeButton closedBox">DUI / DUID [18.2-266]</div>');
	$(".output").append('<div class="box codeButton closedBox">Drunk in Public [18.2-388]</div>');
	$(".output").append('<div class="box codeButton closedBox">DUI Maim Another [18.2-51.4]</div>');
	$(".output").append('<div class="box codeButton closedBox">DUI Manslaughter [18.2-36.1]</div>');
	$(".output").append('<div class="box codeButton closedBox">Poss alcohol by minor / Fake ID to purchase [4.1-305]</div>');
	$(".output").append('<div class="box codeButton closedBox">Poss alcohol on school property [4.1-309]</div>');
	$(".output").append('<div class="box codeButton closedBox">Refusal of Breath or Blood test [18.2-268.3]</div>');
	$(".output").append('<div class="box codeButton closedBox">Tamper / allow operate w/o interlock [18.2-270.1]</div>');
	$(".output").append('<div class="box codeButton closedBox">Transporation of Alcohol [4.1-310]</div>');
	$(".output").append('<div class="box trafficButton">Return to Traffic Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');

	$(".codeButton").click(function() {
		var divTarget = $(this);
		codeClicked(divTarget);
	});
	$(".trafficButton").click(trafficCodes);
	$(".startScreenButton").click(startScreen);
};
function dli(){
	$(".output").html('<div class="box codeButton closedBox">Allow Drug/Alcohol suspended driver to operate vehicle [46.2-301.1](E)</div>');
	$(".output").append('<div class="box codeButton closedBox">Allowing Unlicensed perosn to drive [46.2-349]</div>');
	$(".output").append('<div class="box codeButton closedBox">Display Revoked/Suspended/Altered OL [46.2-346]</div>');
	$(".output").append('<div class="box codeButton closedBox">Driver after Revocation for Multiple DUIS [46.2-391](D)</div>');
	$(".output").append('<div class="box codeButton closedBox">Drive in vio. of restriction (Glasses, hand controls, etc) [46.2-329]</div>');
	$(".output").append('<div class="box codeButton closedBox">Drive while adjudicated a Habitual Offender [46.2-357]</div>');
	$(".output").append('<div class="box codeButton closedBox">Drive while Suspended / Revoked [46.2-301]</div>');
	$(".output").append('<div class="box codeButton closedBox">Drive while revoked DUI related / Operate without Interlock [18.2-272]</div>');
	$(".output").append('<div class="box codeButton closedBox">Expired OL; active duty military [46.2-221.2]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to notify DMV of address change (30 days) [46.2-324]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to obtain VA OL after 60 days of residency [46.2-308]</div>');
	$(".output").append('<div class="box codeButton closedBox">Expired OL [46.2-330]</div>');
	$(".output").append('<div class="box codeButton closedBox">No OL or Registration on possession [46.2-104]</div>');
	$(".output").append('<div class="box codeButton closedBox">No Valid OL (2nd offense is Class 1 Misdemeanor) [46.2-300]</div>');
	$(".output").append('<div class="box codeButton closedBox">Operate w/o proper endorsement; Class M, CMV, Bus [46.2-328]</div>');
	$(".output").append('<div class="box codeButton closedBox">Use altered/forged OL to buy Alcohol [46.2-347]</div>');
	$(".output").append('<div class="box codeButton closedBox">Violation of Leaners (Under 21, Time/Passenger restrict.) [46.2-335]</div>');
	$(".output").append('<div class="box codeButton closedBox">Violation of OL for 16&17yoa (Time/passenger restrict.) [46.2-334.01]</div>');
	$(".output").append('<div class="box codeButton closedBox">No Liability Insurance [46.2-707]</div>');
	$(".output").append('<div class="box codeButton closedBox">Crashes: Proof of Insurance [46.2-902.1]</div>');
	$(".output").append('<div class="box trafficButton">Return to Traffic Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');

	$(".codeButton").click(function() {
		var divTarget = $(this);
		codeClicked(divTarget);
	});
	$(".trafficButton").click(trafficCodes);
	$(".startScreenButton").click(startScreen);
};
function equipment(){
	$(".output").html('<div class="box codeButton closedBox">Defective / Unsafe Equipemnt [46.2-1003]</div>');
	$(".output").append('<div class="box codeButton closedBox">Horn: Defective / inadequate / none [46.2-1059]</div>');
	$(".output").append('<div class="box codeButton closedBox">Horn: Illegal (Whistle/Siren)</div>');
	$(".output").append('<div class="box codeButton closedBox">Mirror(s); Inadequate [46.2-1082]</div>');
	$(".output").append('<div class="box codeButton closedBox">Odometer; Tampering with [46.2-112]</div>');
	$(".output").append('<div class="box codeButton closedBox">Speedomter; Defective [46.2-1080]</div>');
	$(".output").append('<div class="box codeButton closedBox">Steering Gear; Defective [46.2-1065]</div>');
	$(".output").append('<div class="box codeButton closedBox">Unapproved equipment [46.2-1002]</div>');
	$(".output").append('<div class="box codeButton closedBox">Defective Emergency/ Parking Brake [46.2-1068]</div>');
	$(".output").append('<div class="box codeButton closedBox">Defective or Improper Brakes [46.2-1066]</div>');
	$(".output").append('<div class="box codeButton closedBox">Defective / no breakes on Trailer (if required) > 3000lbs [46.2-1070]</div>');
	$(".output").append('<div class="box codeButton closedBox">Illegal Muffler (cutout, no baffles, straight pipes) [46.2-1047]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper or no pollution device [46.2-1048]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper / Defective exhaust (Excessive Noise) [46.2-1049]</div>');
	$(".output").append('<div class="box codeButton closedBox">Dangling Object [46.2-1054]</div>');
	$(".output").append('<div class="box codeButton closedBox">Illegal Window tint / View obstructed (43% front, 28% rear) [46.2-1052]</div>');
	$(".output").append('<div class="box codeButton closedBox">Safety glass required [46.2-1056]</div>');
	$(".output").append('<div class="box codeButton closedBox">Suspension(14-22\" Registered as Passenger Vehicle) [46.2-1063]</div>');
	$(".output").append('<div class="box codeButton closedBox">Registered as Truck < 4500 lbs F&R 28, >4501 lbs F29/R30, >7501 lbs F30/R31 [46.2-1063]</div>');
	$(".output").append('<div class="box codeButton closedBox">Sun Shading w/ Medical certificate, above 35% [46.2-1053]</div>');
	$(".output").append('<div class="box codeButton closedBox">Windshield equired after 07/01/1970 [46.2-1057]</div>');
	$(".output").append('<div class="box codeButton closedBox">Windshield wiperes required / defective [46.2-1055]</div>');
	$(".output").append('<div class="box trafficButton">Return to Traffic Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');

	$(".codeButton").click(function() {
		var divTarget = $(this);
		codeClicked(divTarget);
	});
	$(".trafficButton").click(trafficCodes);
	$(".startScreenButton").click(startScreen);
};
function inspection(){
	$(".output").html('<div class="box codeButton closedBox">Altered / Counterfeit Sticker [46.2-1173]</div>');
	$(".output").append('<div class="box codeButton closedBox">Exceptions to Inspection Requirement [46.2-1158.01]</div>');
	$(".output").append('<div class="box codeButton closedBox">Expired / No State Inspection/ Expired Rejection [46.2-1158]</div>');
	$(".output").append('<div class="box codeButton closedBox">Unauthorized Use of Inspection Sticker [46.2-1172]</div>');
	$(".output").append('<div class="box trafficButton">Return to Traffic Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');

	$(".codeButton").click(function() {
		var divTarget = $(this);
		codeClicked(divTarget);
	});
	$(".trafficButton").click(trafficCodes);
	$(".startScreenButton").click(startScreen);
};
function lights(){
	$(".output").html('<div class="box codeButton closedBox">Defective Brake Light [46.2-707]</div>');
	$(".output").append('<div class="box codeButton closedBox">Drive w/o Headlights, Amber Lights Required on Tow Trucks [46.2-1030]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Dim Headlights - Moving [46.2-1034]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Dim Headlights - Parked [46.2-1035]</div>');
	$(".output").append('<div class="box codeButton closedBox">Headlights Required [46.2-1011]</div>');
	$(".output").append('<div class="box codeButton closedBox">High Beam Indicator Required [46.2-1033]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper use of Amber/Purple/Green Lights [46.2-1025]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper use of Blue/Red Lights [46.2-1022]</div>');
	$(".output").append('<div class="box codeButton closedBox">Lights on Parked Vehicles [46.2-1037]</div>');
	$(".output").append('<div class="box codeButton closedBox">Lighting Equipment Required [46.2-1010]</div>');
	$(".output").append('<div class="box codeButton closedBox">Marker Lights (Exceeding 35\' Long) [46.2-1018</div>');
	$(".output").append('<div class="box codeButton closedBox">Marker Lights (Exceeding 7\' Wide load or 4\" past widest pt [46.2-1017]</div>');
	$(".output").append('<div class="box codeButton closedBox">Tail Lights or License Plate Lights defective [46.2-1013]</div>');
	$(".output").append('<div class="box codeButton closedBox">Safety Lights Required on Farm Equipment wider than 108\" [46.2-1102]</div>');
	$(".output").append('<div class="box codeButton closedBox">Turn Signals, Inadequate [46.2-1039]</div>');
	$(".output").append('<div class="box codeButton closedBox">Turn Signals, Required [46.2-1038]</div>');
	$(".output").append('<div class="box trafficButton">Return to Traffic Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');

	$(".codeButton").click(function() {
		var divTarget = $(this);
		codeClicked(divTarget);
	});
	$(".trafficButton").click(trafficCodes);
	$(".startScreenButton").click(startScreen);
};
function miscTraffic(){
	$(".output").html('<div class="box codeButton closedBox">Cutting/Injuring Trees, Bridge, Highway, Sign, etc [33.1-345]</div>');
	$(".output").append('<div class="box codeButton closedBox">Depositing or Throwing Glass, Mud, Etc on Hwy [18.2-324]</div>');
	$(".output").append('<div class="box codeButton closedBox">Driving on Sidewalk [46.2-903]</div>');
	$(".output").append('<div class="box codeButton closedBox">Driving Over Fire Hose [46.2-922]</div>');
	$(".output").append('<div class="box codeButton closedBox">Driving Through / Over SWZ [46.2-814]</div>');
	$(".output").append('<div class="box codeButton closedBox">Driving w/ Earphones (Both Ears) [46.2-1078]</div>');
	$(".output").append('<div class="box codeButton closedBox">Driving while Reading / Writing Text [46.2-1078.1]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Keep Right at Intersection [46.2-803]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Keep Right of Center of Hwy [46.2-802]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Pay Toll [46.2-819]</div>');
	$(".output").append('<div class="box codeButton closedBox">Following or Parking Too Clos to Fire Appratus [46.2-921]</div>');
	$(".output").append('<div class="box codeButton closedBox">Following Too Close [46.2-816]</div>');
	$(".output").append('<div class="box codeButton closedBox">Gasoline Drive Off [46.2-819.2]</div>');
	$(".output").append('<div class="box codeButton closedBox">Hazard Lights; Travelling in excess of 30mph [46.2-1040]</div>');
	$(".output").append('<div class="box codeButton closedBox">Impeding Flow of Traffic [46.2-877]</div>');
	$(".output").append('<div class="box codeButton closedBox">Indecent Exposure [18.2-387]</div>');
	$(".output").append('<div class="box codeButton closedBox">Littering [33.2-802]</div>');
	$(".output").append('<div class="box codeButton closedBox">Operate Vehicle w/o Serial or ID # [46.2-1072]</div>');
	$(".output").append('<div class="box codeButton closedBox">Poss Vehicle w/ Altered/Removed VIN (Felony) [46.2-1075]</div>');
	$(".output").append('<div class="box codeButton closedBox">Radar Detector [46.2-1079]</div>');
	$(".output").append('<div class="box codeButton closedBox">Railroad Car not to Stop in Roadway > 5 Minutes [56-412.1]</div>');
	$(".output").append('<div class="box codeButton closedBox">Removing/Altering Serial or ID #, decals, devices [46.2-1074]</div>');
	$(".output").append('<div class="box codeButton closedBox">Slowing Moving Emblems [46.2-1081]</div>');
	$(".output").append('<div class="box codeButton closedBox">TV in View of Driver (Out-of-State TV must be on) [46.2-1077]</div>');
	$(".output").append('<div class="box codeButton closedBox">Unauthorized Use of Motor Vehicle [18.2-102]</div>');
	$(".output").append('<div class="box codeButton closedBox">Unsafe Lane Change [46.2-804]</div>');
	$(".output").append('<div class="box codeButton closedBox">Use of Phone by Provisional Licensed Drivers [46.2-334.01]</div>');
	$(".output").append('<div class="box trafficButton">Return to Traffic Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');

	$(".codeButton").click(function() {
		var divTarget = $(this);
		codeClicked(divTarget);
	});
	$(".trafficButton").click(trafficCodes);
	$(".startScreenButton").click(startScreen);
};
function motorcycle(){
	$(".output").html('<div class="box codeButton closedBox">ATV on roadway, ATV w/o Helmet, Age rest. [46.2-915.1]</div>');
	$(".output").append('<div class="box codeButton closedBox">Enforcement Regulations [46.2-800]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Wear Approved Helmet (Motorcycle) [46.2-910]</div>');
	$(".output").append('<div class="box codeButton closedBox">Lights: Head/Tail/Brake/License Plate (# and types on MC) [46.2-1012]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper Riding on Sidewalks [46.2-903]</div>');
	$(".output").append('<div class="box codeButton closedBox">Lights / Reflectors Required Between Sunset/Sunrise [46.2-1015]</div>');
	$(".output").append('<div class="box codeButton closedBox">Mopeds not to exceed 35mph, Driver >16yoa, Driver to carry ID [46.2-914]</div>');
	$(".output").append('<div class="box codeButton closedBox">Mopeds; Safety Equipment Required (Helmet/Eye Protection) [46.2-915.2]</div>');
	$(".output").append('<div class="box codeButton closedBox">Mopeds; Titles and Registration Required [46.2-600]</div>');
	$(".output").append('<div class="box codeButton closedBox">Mopeds: Title/Registrations/Plates Required [46.2-613]</div>');
	$(".output").append('<div class="box codeButton closedBox">Mopeds/Bicycles on Roadway/Path to Stay Right [46.2-905]</div>');
	$(".output").append('<div class="box codeButton closedBox">No Motorcycle Endorcement [46.2-328]</div>');
	$(".output").append('<div class="box codeButton closedBox">No Muffler / Improper Muffler [46.2-1050]</div>');
	$(".output").append('<div class="box codeButton closedBox">Operate Motorcycle w/o Headlight/Horn/Mirror [46.2-912]</div>');
	$(".output").append('<div class="box codeButton closedBox">Operate Motorcycle w/o Fixed Seat [46.2-909]</div>');
	$(".output").append('<div class="box codeButton closedBox">Unlawfully attaching to a motor vehicle [46.2-932]</div>');
	$(".output").append('<div class="box codeButton closedBox">Personal Assistance Mobility Devices/Toy Vehicles/ Bicycles [46.2-908.1]</div>');
	$(".output").append('<div class="box codeButton closedBox">Low-speed Vehicles; Required Equipment [46.2-908.2]</div>');
	$(".output").append('<div class="box codeButton closedBox">Low-speed Vehicles; Operation; License/Reg Required [46.2-908.3]</div>');  	
	$(".output").append('<div class="box trafficButton">Return to Traffic Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');

	$(".codeButton").click(function() {
		var divTarget = $(this);
		codeClicked(divTarget);
	});
	$(".trafficButton").click(trafficCodes);
	$(".startScreenButton").click(startScreen);
};
function parking(){
	$(".output").html('<div class="box codeButton closedBox">Abandoned / Unattended Vehicle (General) [46.2-1209]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to set Parking Brake [46.2-1071]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Stop at Railroad Crossing [46.2-885]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Stop at RR Cross While Operating School Bus/HazMat/etc[46.2-886]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Obey Parking Regulations in VDOT Commuter Lots [46.2-1219.2]</div>');
	$(".output").append('<div class="box codeButton closedBox">Imp. Parking in Front of Private Driveway/ 15ft of Hydrant [46.2-1239]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper Stopping at/near Scene of Fire/Crash/Emergency [46.2-890]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper Stopping on Highway (General) [46.2-888]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper Stopping to Take On/Off Cargo [46.2-893]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper Stopping Vehicles of Another [46.2-818]</div>');
	$(".output").append('<div class="box codeButton closedBox">Parking Too Close to Fire Apparatus (w/i 500\') [46.2-921]</div>');
	$(".output").append('<div class="box trafficButton">Return to Traffic Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');

	$(".codeButton").click(function() {
		var divTarget = $(this);
		codeClicked(divTarget);
	});
	$(".trafficButton").click(trafficCodes);
	$(".startScreenButton").click(startScreen);
};
function passing(){
	$(".output").html('<div class="box codeButton closedBox">Fail to Give Way to Passing Vehicle [46.2-842]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Give Way to Passing Veh on Divided Hwy [46.2-842.1]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper or Unsafe Passing [46.2-838]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper Passing at Intersection [46.2-803]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper Passing on a Solid Line [46.2-804]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper Passing on Right (Shoulder Running) [46.2-841]</div>');
	$(".output").append('<div class="box codeButton closedBox">Passing Stopped School Bus [46.2-844]</div>');
	$(".output").append('<div class="box trafficButton">Return to Traffic Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');
	
	$(".codeButton").click(function() {
		var divTarget = $(this);
		codeClicked(divTarget);
	});
	$(".trafficButton").click(trafficCodes);
	$(".startScreenButton").click(startScreen);
};
function pedestrian(){
	$(".output").html('<div class="box codeButton closedBox">Fail to walk on Left Side of Roadway [46.2-928]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Yield the ROW to a Pedestrian [46.2-924]</div>');
	$(".output").append('<div class="box codeButton closedBox">How/Where Pedestrians to Cross/Not Interfere w/ Traffic [46.2-923]</div>');
	$(".output").append('<div class="box codeButton closedBox">Lotiering on Bridge [46.2-930]</div>');
	$(".output").append('<div class="box codeButton closedBox">Pedestrian on Interstate [46.2-808]</div>');
	$(".output").append('<div class="box codeButton closedBox">Pedestrian Soliciting Rides [46.2-929]</div>');
	$(".output").append('<div class="box codeButton closedBox">Unlawful Playing on Streets/Highway [46.2-932]</div>');
	$(".output").append('<div class="box trafficButton">Return to Traffic Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');

	$(".codeButton").click(function() {
		var divTarget = $(this);
		codeClicked(divTarget);
	});
	$(".trafficButton").click(trafficCodes);
	$(".startScreenButton").click(startScreen);
};
function reckless(){
	$(".output").html('<div class="box codeButton closedBox">Agressive Driving [46.2-868.1]</div>');
	$(".output").append('<div class="box codeButton closedBox">Aiding/Abetting in a Raise (Class 1 Misd) [46.2-866]</div>');
	$(".output").append('<div class="box codeButton closedBox">Reckless Driving at Church/School/Private Property [46.2-864]</div>');
	$(".output").append('<div class="box codeButton closedBox">Driving Two Abreast / Splitting Lanes (Exclused Motorcycles) [46.2-857]</div>');
	$(".output").append('<div class="box codeButton closedBox">Exceed Safe Speed for Road Conditions [46.2-861]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Give Adequate and Timely Signals [46.2-860]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Maintain Control / Inadequate Brakes [46.2-853]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Stop Before Entering a Public Highway [46.2-863]</div>');
	$(".output").append('<div class="box codeButton closedBox">Reckless Driving General [46.2-852]</div>');
	$(".output").append('<div class="box codeButton closedBox">Passing at School Bus Loading/Unloading [46.2-859]</div>');
	$(".output").append('<div class="box codeButton closedBox">Passing at RR Crossing/Intersection [46.2-858]</div>');
	$(".output").append('<div class="box codeButton closedBox">Passing on Curve or Grade [46.2-854]</div>');
	$(".output").append('<div class="box codeButton closedBox">Passing Two Abreast [46.2-856]</div>');
	$(".output").append('<div class="box codeButton closedBox">Racing [46.2-865]</div>');
	$(".output").append('<div class="box codeButton closedBox">Speeding (20mph over, or 81mph and up) [46.2-862]</div>');
	$(".output").append('<div class="box codeButton closedBox">Too many in Front Seat / Obstructed View [46.2-855]</div>');
	$(".output").append('<div class="box trafficButton">Return to Traffic Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');
	
	$(".codeButton").click(function() {
		var divTarget = $(this);
		codeClicked(divTarget);
	});
	$(".trafficButton").click(trafficCodes);
	$(".startScreenButton").click(startScreen);
};
function registration(){
	$(".output").html('<div class="box codeButton closedBox">Antique Plates; Violation of and Restrictions [46.2-730]</div>');
	$(".output").append('<div class="box codeButton closedBox">Altered or Ficticious Registration [46.2-613]</div>');
	$(".output").append('<div class="box codeButton closedBox">Altered or Forged License Plates [46.2-722]</div>');
	$(".output").append('<div class="box codeButton closedBox">Altered or Forgery of Title or Registration (Class 6 Felony) [46.2-605]</div>');
	$(".output").append('<div class="box codeButton closedBox">Altered VIN (Felony) [46.2-1074]</div>');
	$(".output").append('<div class="box codeButton closedBox">Expired State License Plates [46.2-646]</div>');
	$(".output").append('<div class="box codeButton closedBox">Expired out of State Plates [46.2-613]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Display Plates (Number of Plates Required) [46.2-711]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Notify DMV of Address Change (30 days) [46.2-606]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Obtain Title/Registration [46.2-600]</div>');
	$(".output").append('<div class="box codeButton closedBox">Handicapped License Plates [46.2-731]</div>');
	$(".output").append('<div class="box codeButton closedBox">Holding Open Title (Class 1 Misdemeanor) [46.2-618]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper Display of Plates (No Front/Rear) [46.2-715]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper Display of License Plate Decals [46.2-712]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper Registration [46.2-613]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper Securing/Fastening/Covering of License Plates [46.2-716]</div>');
	$(".output").append('<div class="box codeButton closedBox">No Registration Card in Possession [46.2-104]</div>');
	$(".output").append('<div class="box codeButton closedBox">Operate Vehicle with Altered VIN [46.2-1072]</div>');
	$(".output").append('<div class="box codeButton closedBox">Operate For Hire Vehicle w/o For Hire Tags [46.2-724]</div>');
	$(".output").append('<div class="box codeButton closedBox">Suspension for defective/inadequate equipment [46.2-1000]</div>');
	$(".output").append('<div class="box trafficButton">Return to Traffic Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');
	
	$(".codeButton").click(function() {
		var divTarget = $(this);
		codeClicked(divTarget);
	});
	$(".trafficButton").click(trafficCodes);
	$(".startScreenButton").click(startScreen);
};
function rightOfWay(){
	$(".output").html('<div class="box codeButton closedBox">Fail to Stop Before Entering Public Highway [46.2-826]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Yield ROW (\'T\' Intersection) [46.2-824]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Yield ROW (General)[46.2-820]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Yield ROW (Making Left Turn) [46.2-825]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Yield ROW (Stop/Yield Sign) [46.2-821]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Yield ROW to Military Procession [46.2-827]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Yield to Emergency Vehicle [46.2-829]</div>');
	$(".output").append('<div class="box codeButton closedBox">FTY ROW to Funeral Procession under Police Escort [46.2-828]</div>');
	$(".output").append('<div class="box codeButton closedBox">FTY ROW to Stationary Emergency Vehicle (Move Over Law) [46.2-921.1]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper Backing, Stopping, Turning [46.2-848]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper Turn/ U-Turn on Curve or Crest of Grade [46.2-845]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper Turning at Intersections [46.2-846]</div>');
	$(".output").append('<div class="box trafficButton">Return to Traffic Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');
	
	$(".codeButton").click(function() {
		var divTarget = $(this);
		codeClicked(divTarget);
	});
	$(".trafficButton").click(trafficCodes);
	$(".startScreenButton").click(startScreen);
};
function bus(){
	$(".output").html('<div class="box codeButton closedBox">Driver to Wear Seatbelt [46.2-1091]</div>');
	$(".output").append('<div class="box codeButton closedBox">Lettering Required [46.2-1089]</div>');
	$(".output").append('<div class="box codeButton closedBox">Warning Device Required [46.2-1090]</div>');
	$(".output").append('<div class="box trafficButton">Return to Traffic Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');
	
	$(".codeButton").click(function() {
		var divTarget = $(this);
		codeClicked(divTarget);
	});
	$(".trafficButton").click(trafficCodes);
	$(".startScreenButton").click(startScreen);
};
function seatbelt(){
	$(".output").html('<div class="box codeButton closedBox">Driver\'s Seat Required [46.2-1084]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Wear Seatbelt [46.2-1094]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to secure child under 17 (under 8 requires child seat) [46.2-1095]</div>');
	$(".output").append('<div class="box codeButton closedBox">Seat Belts Required [46.2-1092]</div>');
	$(".output").append('<div class="box trafficButton">Return to Traffic Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');
	
	$(".codeButton").click(function() {
		var divTarget = $(this);
		codeClicked(divTarget);
	});
	$(".trafficButton").click(trafficCodes);
	$(".startScreenButton").click(startScreen);
};
function signal(){
	$(".output").html('<div class="box codeButton closedBox">CMV in Left Lane [46.2-803.1]</div>');
	$(".output").append('<div class="box codeButton closedBox">Disobey Railroad Crossing Gate [46.2-885]</div>');
	$(".output").append('<div class="box codeButton closedBox">Evasion of Traffic Control Device [46.2-833.1]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Give Proper Signal (Turning) [46.2-849]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Give Signal (Backing/Stoping/Turning) [46.2-848]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Obey a Highway Sign [46.2-830]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Obey a Traffic Light [46.2-833]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Obey Parking Regulation in VDOT commuter lots [46.2-1219.2]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Obey Signals by LEO / Crossing Guard [46.2-834]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Obey Stop Sign [46.2-821]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper Right Turn on Red (Fail to Stop, or Sign Posted) [46.2-835]</div>');
	$(".output").append('<div class="box codeButton closedBox">Handicap Spaces; Unauthorized Parking in [46.2-1242]</div>');
	$(".output").append('<div class="box codeButton closedBox">Handicap Spaces; Unauthorized Use of Placard or Plates [46.2-1250]</div>');
	$(".output").append('<div class="box codeButton closedBox">Hazard-Flashers Required When Stopped on Shoulder [46.2-1040]</div>');
	$(".output").append('<div class="box codeButton closedBox">Injuring of Signs [46.2-832]</div>');
	$(".output").append('<div class="box codeButton closedBox">Slow-moving Vehicle Emblems (Vehicles Operating at <25mph) [46.2-1081]</div>');
	$(".output").append('<div class="box codeButton closedBox">Unauthorized Use of Crossover [46.2-808.1]</div>');
	$(".output").append('<div class="box codeButton closedBox">Unofficial Signs Prohibited [46.2-831]</div>');
	$(".output").append('<div class="box trafficButton">Return to Traffic Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');
	
	$(".codeButton").click(function() {
		var divTarget = $(this);
		codeClicked(divTarget);
	});
	$(".trafficButton").click(trafficCodes);
	$(".startScreenButton").click(startScreen);
};
function size(){
	$(".output").html('<div class="box codeButton closedBox">Fail to Display Flat/Light at End of Load Extending > 4\' [46.2-1121]</div>');
	$(".output").append('<div class="box codeButton closedBox">Liquidating Damages - Weight Limits [46.2-1135]</div>');
	$(".output").append('<div class="box codeButton closedBox">Load Extending More Than 3\' From Front [46.2-1120]</div>');
	$(".output").append('<div class="box codeButton closedBox">Over Gross Weight (Non-Interstate) [46.2-1126]</div>');
	$(".output").append('<div class="box codeButton closedBox">Over Height (13\' 6\") [46.2-1110]</div>');
	$(".output").append('<div class="box trafficButton">Return to Traffic Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');
	
	$(".codeButton").click(function() {
		var divTarget = $(this);
		codeClicked(divTarget);
	});
	$(".trafficButton").click(trafficCodes);
	$(".startScreenButton").click(startScreen);
};
function speeding(){
	$(".output").html('<div class="box codeButton closedBox">Speeding (25mph School Zone) [46.2-873]</div>');
	$(".output").append('<div class="box codeButton closedBox">Speeding (25mph Business & Residential) [46.2-874]</div>');
	$(".output").append('<div class="box codeButton closedBox">Speeding (35mph Non Surface Treated Hwy) [46.2-873.1]</div>');
	$(".output").append('<div class="box codeButton closedBox">Speeding (35mph Zone, City or Town) [46.2-875]</div>');
	$(".output").append('<div class="box codeButton closedBox">Speeding (55, 65, 70mph Zones) [46.2-870]</div>');
	$(".output").append('<div class="box codeButton closedBox">Speeding (All Other Zones Not Specified) [46.2-878]</div>');
	$(".output").append('<div class="box codeButton closedBox">Speeding (Hwy Work Zone, workers present) [46.2-878.1]</div>');
	$(".output").append('<div class="box codeButton closedBox">Speeding (Bridges) [46.2-881]</div>');
	$(".output").append('<div class="box codeButton closedBox">Speeding CMV (Violation of Permit/Oversized Loads) [46.2-872]</div>');	
	$(".output").append('<div class="box trafficButton">Return to Traffic Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');
	
	$(".codeButton").click(function() {
		var divTarget = $(this);
		codeClicked(divTarget);
	});
	$(".trafficButton").click(trafficCodes);
	$(".startScreenButton").click(startScreen);
};
function truck(){
	$(".output").html('<div class="box codeButton closedBox">Brake Lights not visible 500\' to rear (on towed vehicle) [46.2-1014]</div>');
	$(".output").append('<div class="box codeButton closedBox">Brakes on Trailers, GW >3000lbs, Breakaway Cables required [46.2-1070]</div>');
	$(".output").append('<div class="box codeButton closedBox">CMV Prohibited in Left Lane [46.2-803.1]</div>');
	$(".output").append('<div class="box codeButton closedBox">Extend Loads Beyond Line of Fender/Body, More than 6\" [46.2-1111]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Cover Load / Fail to Prevent Escape of Load [46.2-1156]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Display Amber Warning Lights While Towing [46.2-1030]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fail to Set Out Flares/Triangles on Disabled CMV [46.2-111]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fastening Load of Logs, Barrels, Etc. [46.2-1155]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper Towing (Emergency Breakdown-Licensed Driver to Steer)[46.2-1154]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper Towing (No Safety Chains, Tires not Strapped Down)[46.2-1118]</div>');
	$(".output").append('<div class="box codeButton closedBox">No Mud Flaps (Trucks Registered over 40,000) [46.2-1083]</div>');
	$(".output").append('<div class="box codeButton closedBox">No Name and Address onf Side of For Hire Vehicle [46.2-1076]</div>');
	$(".output").append('<div class="box codeButton closedBox">Reflectors Required on Trailers < 3000 lbs [46.2-1088.5]</div>');
	$(".output").append('<div class="box codeButton closedBox">Refusal to Weigh Vehicle [46.2-1137]</div>');
	$(".output").append('<div class="box codeButton closedBox">Tampering with GVWR Stickers [46.2-1075.1]</div>');
	$(".output").append('<div class="box codeButton closedBox">Tow Truck; Drivers To Have Auth. Document or Registration [46.2-116]</div>');
	$(".output").append('<div class="box codeButton closedBox">Tow Truck; Drivers to Register w/ DCJS [46.2-116](D)</div>');
	$(".output").append('<div class="box codeButton closedBox">Transporting Person Under 16 in Bed of Pickup Truck [46.2-1156.1]</div>');
	$(".output").append('<div class="box codeButton closedBox">Unlawfully Occupying a Trailer (RV or Any) While Towed [46.2-813]</div>');
	$(".output").append('<div class="box codeButton closedBox">Vehicles Having More Than 1 Trailer, etc, Attached Thereto [46.2-1116]</div>');
	$(".output").append('<div class="box trafficButton">Return to Traffic Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');

	$(".codeButton").click(function() {
		var divTarget = $(this);
		codeClicked(divTarget);
	});
	$(".trafficButton").click(trafficCodes);
	$(".startScreenButton").click(startScreen);
};
function farm(){
	$(".output").html('<div class="box codeButton closedBox">Certain veh\'s transp. fertilizer/cotton/peanuts, reg exempt [46.2-672]</div>');
	$(".output").append('<div class="box codeButton closedBox">Fuel Tax Laws - Willful commission of prohib. acts [58.1-2273]</div>');
	$(".output").append('<div class="box codeButton closedBox">Improper sale/use of untaxed fuel; civil penalty [58.1-2265]</div>');
	$(".output").append('<div class="box codeButton closedBox">Insurance coverage for exempted motor vehicles [46.2-684.1]</div>');
	$(".output").append('<div class="box codeButton closedBox">Livestock deifnition [3.2-5900]</div>');
	$(".output").append('<div class="box codeButton closedBox">Nocturnal use of highways by exempted vehicles [46.2-684]</div>');
	$(".output").append('<div class="box codeButton closedBox">Operating a farm vehicle for non-farm purposes [46.2-698](F)</div>');
	$(".output").append('<div class="box codeButton closedBox">Refuse to allow inspection/taking of fuel sample; civ pen. [58.1-2267]</div>');
	$(".output").append('<div class="box codeButton closedBox">Registered Farm vehicles (uses/exceptions/fees) [46.2-698]</div>');
	$(".output").append('<div class="box codeButton closedBox">Reg a veh as a farm veh when it will not be used for farming [46.2-605]</div>');
	$(".output").append('<div class="box codeButton closedBox">Return trips for exmpted farm vehicles [46.2-673]</div>');
	$(".output").append('<div class="box codeButton closedBox">Safety light required on farm equipment wider than 108\" [46.2-1102] </div>');
	$(".output").append('<div class="box codeButton closedBox">Slow-moving vehicle emblems (vehicles operating at < 25mph) [46.2-1081]</div>');
	$(".output").append('<div class="box codeButton closedBox">Tile required for farm use vehicles [46.2-600]</div>');
	$(".output").append('<div class="box codeButton closedBox">Vehicles used by commerical fishermen, registration exempt [46.2-674]</div>');
	$(".output").append('<div class="box codeButton closedBox">Violation of \"Farm Use\" tags [46.2-665]</div>');
	$(".output").append('<div class="box codeButton closedBox">When CDL required to operate registered Fram Vehicle [46.2-341.4]</div>');
	$(".output").append('<div class="box trafficButton">Return to Traffic Codes</div>');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');

	$(".codeButton").click(function() {
		var divTarget = $(this);
		codeClicked(divTarget);
	});
	$(".trafficButton").click(trafficCodes);
	$(".startScreenButton").click(startScreen);
};


/**********************
End Traffic Subsections
***********************/

function criminalCodes(){
	$(".output").html('Criminal Codes Go Here');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');
	$(".startScreenButton").click(startScreen);
};

function cmvCodes(){
	$(".output").html('CMV Codes Go Here');
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');

	$(".startScreenButton").click(startScreen);
}

/**********************
End Codes Subsections
***********************/


function courtInfo(){
	$(".output").html("COURT SECTION FUNCTION");
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');
	
	$(".startScreenButton").click(startScreen);
};

function duiInfo(){
	$(".output").html("DUI INFO FUNCTION");
	// $(".output").append('<div class="box startScreenButton">Return to Main Page</div>');
	
	$(".startScreenButton").click(startScreen);
};

/**********************
End Info Subsections
***********************/

/**********************
Helper Functions
**********************/

function codeClicked(divTarget){
	/*using closedBox and openBox is not redundant, but required due to the delay in the ajax call
	we require both classes to pass the check to continue the conditional statement.  By adding the target class
	at the beginning of the block, we invalidate both conditionals until the code in the current scope has executed

	Doing this keeps the box from double expanding, or the code from otherwise breaking
	*/
	var loader = '<i class="fa fa-spinner fa-spin fa-lg fa-fw"></i>';
	if (divTarget.hasClass("closedBox") && !divTarget.hasClass("openBox")){		//if box is still closed
		divTarget.addClass("openBox");
		
		divTarget.append(loader);

		var ajaxObj = getText(divTarget.html());
		
		ajaxObj.done(function(data){
			$(".fa-spinner").remove();
			divTarget.append("<br><p>" + data + "</p>");
			divTarget.removeClass("closedBox");
		});

	}else if (!divTarget.hasClass("closedBox") && divTarget.hasClass("openBox")){  //if box is already expanded
		divTarget.addClass("closedBox")
		var cleanText = divTarget.html().replace(/\<br\>.*\n\<p\>\<\/p\>/, ''); 
		divTarget.html(cleanText);
		divTarget.removeClass("openBox");
	};
};

function getText(lawObj){
	var lawNumber = lawObj.match(/\[.*?\]/)[0].replace(/\[|\]/g, ''); //pulls Code Section Number from brackets in description
	var lawUrl = "http://law.lis.virginia.gov/vacode/title4.1/chapter3/section" + lawNumber;  //website for that Code Section
	
	return $.ajax({
		type: "POST",
		url: "TrooperCall.py",
		data: {"targetUrl": lawUrl},
		dataType: "text"
	});
};



