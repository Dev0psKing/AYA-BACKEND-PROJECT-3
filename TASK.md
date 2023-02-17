## AYA BACKEND TASK 3 (Modern Transportation)

#### Introduction 
The problem with current transportation systems is that they often rely on fossil fuels and are not sustainable in the long term. They also contribute to air pollution and climate change and can be costly and inefficient. In urban areas, traffic congestion and lack of affordable transportation options can make it difficult for people to get to work, school, and other important destinations. Additionally, current transportation systems do not always meet the needs of different communities and individuals, leading to social and economic disparities. The goal of this project would be to research and develop new forms of transportation that are more sustainable, efficient, and equitable than current systems.

#### Statement of the problem
There is a major new technology that is destined to be a disruptive force in the field of transportation: Electric vertical takeoff and landing (eVTOL) vehicles  **eVTOL**. Just as the mobile phone allowed developing countries to leapfrog older technologies for personal communication, the eVTOL has the potential to leapfrog traditional transportation infrastructure. Useful eVTOL functions include the delivery of small items that are (urgently) needed in locations with difficult access.

![eVTOL](https://github.com/KhalebOBrien/AyaVTOL/blob/main/assets/imgs/vehicle.png?raw=true)

#### Task description
We have a fleet of **20 eVTOL**.  An eVTOL is capable of carrying devices and capable of delivering small loads. For our use case **the load is medications**.

##### An **eVTOL** has:
- serial number (100 characters max); 
- model (Lightweight, Middleweight, Cruiserweight, Heavyweight); 
- weight limit (500gr max); 
- battery capacity (percentage);
- state (IDLE, LOADING, LOADED, DELIVERING, DELIVERED, RETURNING).

##### Each **Medication** has: 
- name (allowed only letters, numbers, ‘-’, ‘_’); 
- weight; 
- code (allowed only upper case letters, underscore, and numbers);
- image (picture of the medication case).

Develop a service via REST API that allows clients to communicate with the eVTOL (i.e. **dispatch controller**).

The service should allow:
- registering an eVTOL;
- loading an eVTOL with medication items; 
- checking loaded medication items for a given eVTOL; 
- checking available eVTOL for loading; 
- checking eVTOL battery level for a given eVTOL; 

> Feel free to make assumptions about the design approach. 
For example, to create a user model for eVTOL booking, you will need to gather information about the types of eVTOL that will be booked, the user's preferences for shipping and payment options, and any other relevant information that will be used to make the booking process as efficient and user-friendly as possible.

#### Requirements
While implementing your solution **please take care of the following requirements**: 

#### Functional requirements
- There is a need for UI;
- Prevent the eVTOL from being loaded with more weight than it can carry;
- Prevent the eVTOL from being in a LOADING state if the battery level is **below 25%**; 
- Introduce a periodic task to check the eVTOL’s battery levels and create a history/audit event log for this.

#### Non-functional requirements
- Input/output data must be in JSON format;
- Your project must have a README and also create an info.txt that will contain details about your .env  and endpoints
- Required data must be preloaded in the database.
- tests are optional but advisable (if you have time); 
- host the API on render, railway, or any other hosting company of your choice
- host the front end on vercel, netlify, or anyone you are comfortable with.
- the submission link will be shared on slack and there is no room for a late submission.
- Advice: Show us how you work through your commit history.

#### DEADLINE ON OR BEFORE COD 8TH FEBRUARY, 2023