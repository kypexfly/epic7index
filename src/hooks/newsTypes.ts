/* eslint-disable @typescript-eslint/no-explicit-any */
export interface NewsFetch {
    return_code:    number;
    return_message: string;
    context:        Context;
    extension:      null;
}

export interface Context {
    board_name:   string;
    board_type:   number;
    list_type:    number;
    paging_type:  number;
    total_count:  number;
    article_list: ArticleList[];
}

export interface ArticleList {
    card_no:                string;
    channel_no:             number;
    user:                   User;
    profile_img:            null;
    title:                  string;
    subtitle:               string;
    content:                string;
    tag_list:               string[];
    article_tag_info:       ArticleTagInfo;
    reply_yn:               Yn;
    reply_cnt:              number;
    claim_cnt:              number;
    share_cnt:              number;
    read_cnt:               number;
    like_cnt:               number;
    liked:                  boolean;
    dislike_cnt:            number;
    disliked:               null;
    reg_dt:                 string;
    community_no:           number;
    enable_share:           null;
    view_more_flag:         boolean;
    mine:                   boolean;
    media_type:             MediaType | null;
    media_url:              null | string;
    preview_service_type:   ServiceType | null;
    preview_url:            string;
    mobile_thumb_url:       null;
    img_width:              null | string;
    img_height:             null | string;
    write_type:             WriteType;
    card_function_type:     null | string;
    media_cnt:              number;
    media_list:             MediaList[] | null;
    poll_list:              null;
    poll_nos:               null;
    reply:                  null;
    attached_file_id:       null;
    headline_name:          null;
    head_attach:            boolean;
    card_type:              CardType;
    public_yn:              Yn;
    scrap_permission_yn:    Yn;
    referred_cnt:           number;
    sub_card_cnt:           null;
    sub_card_user_cnt:      null;
    last_upd_dt:            null;
    grade_avg:              null;
    grade_cnt:              null;
    ugc_meta:               null;
    meta_content:           null;
    ugc_id:                 null;
    ugc_type:               null;
    status:                 Status;
    status_reserved:        null;
    device_type:            DeviceType;
    overview_url:           null | string;
    last_reply_user:        User;
    last_reply_dt:          null | string;
    active_yn:              null;
    progress_encoding:      boolean;
    view_mode:              ViewMode;
    notice_event_yn:        Yn;
    event_yn:               Yn;
    event_start_dt:         null;
    event_end_dt:           null;
    publish_reservation_yn: Yn;
    pick_reg_dt:            null;
    rec_yn:                 Yn;
    notice_pick_reg_dt:     null;
}

export interface ArticleTagInfo {
    channel_tag:     ArticleTagInfoChannelTag[];
    menu_tag:        any[];
    attribute_tag:   any[];
    user_tag:        null;
    hash_tag:        string[];
    head_tag:        any[];
    custom_tag_list: CustomTagList;
}

export enum ArticleTagInfoChannelTag {
    Events = 'Events',
    GameMaintenance = 'Game_Maintenance',
    GeneralDiscussion = 'General_Discussion',
}

export interface CustomTagList {
    channel_tag:   CustomTagListChannelTag[];
    menu_tag:      any[];
    attribute_tag: any[];
    group_tag:     any[];
}

export enum CustomTagListChannelTag {
    EpicSeven = 'EpicSeven',
}

export enum CardType {
    Card = 'CARD',
}

export enum DeviceType {
    M01 = 'M01',
    M02 = 'M02',
    P01 = 'P01',
}

export enum Yn {
    N = 'N',
    Y = 'Y',
}

export interface User {
    member_no:                number;
    login_provider_cd:        LoginProviderCD | null;
    nickname:                 null | string;
    cp_nickname:              null;
    profile_img:              null | string;
    badge_img:                null;
    member_type:              null;
    cp_home_nickname_flag:    CpHomeNicknameFlag | null;
    cp_home_game_nickname:    null | string;
    cp_home_game_profile_img: null | string;
    cp_home_game_level:       null | string;
    cp_home_game_exp:         null;
    cp_home_game_grade:       null;
    grade_name:               GradeName;
    grade_rank:               number;
    user_grade:               UserGrade | null;
    liking:                   null;
    score:                    null;
    ranking:                  null;
    cumulative_count:         null;
}

export enum CpHomeNicknameFlag {
    P = 'P',
}

export enum GradeName {
    Official = 'Official',
    골드 = '골드',
    브론즈 = '브론즈',
    실버 = '실버',
    플래티넘 = '플래티넘',
}

export enum LoginProviderCD {
    Fb = 'FB',
    Gp = 'GP',
    Sm = 'SM',
    So = 'SO',
}

export enum UserGrade {
    Normal = 'NORMAL',
}

export interface MediaList {
    media_no:     number;
    media_type:   MediaType;
    service_type: ServiceType;
    preview_url:  string;
    media_url:    string;
    reg_type:     RegType;
}

export enum MediaType {
    Image = 'IMAGE',
}

export enum RegType {
    User = 'USER',
}

export enum ServiceType {
    Dynocaps = 'DYNOCAPS',
}

export enum Status {
    Published = 'PUBLISHED',
}

export enum ViewMode {
    Editor = 'EDITOR',
}

export enum WriteType {
    Expert = 'EXPERT',
}
