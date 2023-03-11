



export interface page{ 
    'size':number
}


export interface links{ 
    'next':string,
    'self':string
}


export interface kilometers{ 
    'estimated_diameter_min':number,
    'estimated_diameter_max': number
}

export interface miles{ 
    'estimated_diameter_min':number,
    'estimated_diameter_max': number
}





   

export interface observations{ 
    'last_observation_date':string,
    'first_observation_date':string
}


export interface distances{ 
    'kilometers':kilometers,
    'miles': miles
}

export interface asteroids{     

    'links' :links,   
    
    'page' : page,
    
    'near_earth_objects':Array<{
    'nasa_jpl_url':string,
    'id':string,
    'absolute_magnitude_h':number,    
    'is_potentially_hazardous_asteroid' :string,
    'name': string,
    'name_limited':string,
    'neo_reference_id':string,
    'is_sentry_object':boolean,
    'estimated_diameter' :distances,
    'orbital_data' : observations

}>
    }









