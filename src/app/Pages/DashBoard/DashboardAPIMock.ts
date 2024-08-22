const DashBoardApi={
    "services": [
        {
            "id": 1,
            "name": "Weather",
            "description": "tracks the weather of site overtime",
            "timestamp": "2022-08-29T05:01:23-04:00"
        },
        {
            "id": 2,
            "name": "Traffic",
            "description": "Monitors the vehicle and people entering property",
            "timestamp": "2022-08-29T05:01:46-04:00"
        },
        {
            "id": 3,
            "name": "Parking",
            "description": "Estimate number of vehicles parked on property",
            "timestamp": "2022-08-29T05:02:13-04:00"
        },
        {
            "id": 4,
            "name": "Waste Management",
            "description": "This service ensures that the garbage is collected.",
            "timestamp": "2022-08-29T05:02:29-04:00"
        },
        {
            "id": 5,
            "name": "Lawn Care",
            "description": "This service ensures that lawn is mowed",
            "timestamp": "2022-08-29T05:02:44-04:00"
        },
        {
            "id": 6,
            "name": "Slip/Fall",
            "description": "this service will perform security analytics like person falling , people fighting etc",
            "timestamp": "2023-04-13T05:49:08-04:00"
        },
        {
            "id": 7,
            "name": "lights off",
            "description": "this service will identify if either any of the light on property is broken.",
            "timestamp": "2023-04-13T05:50:18-04:00"
        },
        {
            "id": 8,
            "name": "Altercation",
            "description": "this service will perform security analytics and checks if there was any act of violence.",
            "timestamp": "2023-06-27T11:23:00-04:00"
        },
        {
            "id": 9,
            "name": "emt",
            "description": "This service identifies if there was any emergency vehicle on the property.",
            "timestamp": "2023-08-02T11:23:00-04:00"
        }
    ],
    "weather": {
        "id": 409297,
        "weather": "clear",
        "temp": "52",
        "description": "clear sky",
        "timestamp": "2024-08-22T07:04:49.883009-04:00",
        "wind_direction": "N",
        "wind_speed": 0,
        "wind_speed_unit": "mph"
    },
    "weather_service": "Weather",
    "weather_description": "tracks the weather of site overtime",
    "traffic": {
        "id": 417424,
        "cars_in": 43,
        "cars_out": 35,
        "bikes_in": 0,
        "bikes_out": 0,
        "people_in": 0,
        "people_out": 0,
        "timestamp": "2024-08-22T07:05:51.178279-04:00",
        "property": 1001
    },
    "traffic_service": "Traffic",
    "traffic_description": "Monitors the vehicle and people entering property",
    "parking": {
        "id": 156233,
        "parked_vehicles": 17,
        "timestamp": "2024-08-22T07:01:05.826310-04:00"
    },
    "parking_service": "Parking",
    "parking_description": "Estimate number of vehicles parked on property",
    "garbage": false,
    "garbage_service": "Waste Management",
    "garbage_description": "This service ensures that the garbage is collected.",
    "garbage_service_time": "Last done 2 months, 2 weeks ago",
    "lawn": false,
    "lawn_service": "Lawn Care",
    "lawn_description": "This service ensures that lawn is mowed",
    "lawn_service_time": "Last done 1 year, 5 months ago",
    "person_fall": 0,
    "person_fall_time": "Last checked now",
    "person_fall_service": "Slip/Fall",
    "person_fall_description": "this service will perform security analytics like person falling , people fighting etc",
    "lights_off": {
        "id": 366837,
        "lights_off": 1,
        "timestamp": "2024-08-21T23:59:58.314441-04:00",
        "lights_off_time": "Last checked 7 hours ago"
    },
    "lights_off_service": "lights off",
    "lights_off_description": "this service will identify if either any of the light on property is broken.",
    "person_fight": 0,
    "person_fight_time": "Last checked now",
    "person_fight_service": "Altercation",
    "person_fight_description": "this service will perform security analytics and checks if there was any act of violence.",
    "emt": 0,
    "emt_time": "Last checked now",
    "emt_service": "emt",
    "emt_description": "This service identifies if there was any emergency vehicle on the property.",
    "developer_message": "data fetched successfull",
    "status": 1
}