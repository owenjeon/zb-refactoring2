// zigbang/api SDK에 type이 정의되이 었으므로 원래는 필요없음. 데모를 위해 임시 구현
interface Item {
    item_id: number;
    user_no: number;
    sales_type: string;
    sales_title: string;
    service_type: string;
    images: string[];
    image_thumbnail: string;
    매매금액?: any;
    보증금액: number;
    월세금액: number;
    전용면적_m2: number;
    공급면적_m2: number;
    대지권면적_m2?: any;
    address: string;
    jibunAddress: string;
    local1: string;
    local2: string;
    local3: string;
    local4?: any;
    room_type_code: string;
    room_type: string;
    title: string;
    status: string;
    description: string;
    secret_memo?: any;
    is_zzim?: any;
    random_location: string;
    parking: string;
    elevator: boolean;
    room_direction: string;
    movein_date: string;
    agent_comment: string;
    pnu: string;
    floor?: any;
    floor_string: string;
    floor_all: string;
    pets?: any;
    loan?: any;
    building_id: number;
    options: string;
    manage_cost: number;
    manage_cost_inc?: any;
    is_realestate: boolean;
    is_room: boolean;
    is_owner?: any;
    is_premium: boolean;
    is_homepage: boolean;
    user_has_penalty: boolean;
    building_type?: any;
    room_gubun_code: string;
    view_count: number;
    updated_at: string;
    is_first_movein?: any;
    vr_key?: any;
    vr_type_name?: any;
    approve_date: string;
    bathroom_count: number;
    residence_type: string;
    manage_cost_not_inc: string;
    popular?: any;
    자동종료대상: boolean;
    상태확인At: Date;
    자동종료At?: any;
}

interface Owner {
    agent_title: string;
    agent_user_type: string;
    owner_user_no: number;
    owner_name: string;
    owner_phone: string;
    profile_url: string;
}

interface Agent {
    agent_title: string;
    agent_address: string;
    agent_phone: string;
    agent_intro: string;
    owner: Owner;
}

interface Register {
    agent_user_type: string;
    register_user_no: number;
    register_name: string;
    register_phone: string;
}

interface Subway {
    id: number;
    name: string;
    description: string;
}

interface ViewSources {
}

interface Danji {
    id: number;
    local1: string;
    local2: string;
    local3: string;
    lat: number;
    lng: number;
    name: string;
    image: string;
    총세대수: number;
    사용승인일: string;
    분양년월?: any;
    서비스구분: string;
    아파트추천평균?: any;
    당첨가점평균?: any;
    first_경쟁률?: any;
    active: boolean;
    price?: any;
    분양일정?: any;
    view_sources: ViewSources;
    roadview_lat?: any;
    roadview_lng?: any;
    roadview_pan?: any;
    roadview_tilt?: any;
    roadview_zoom?: any;
}

export interface ItemDetail {
    item: Item;
    agent: Agent;
    register: Register;
    subways: Subway[];
    danji: Danji;
    is_zzim?: any;
    tags: string[];
}