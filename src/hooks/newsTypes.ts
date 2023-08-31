/* eslint-disable @typescript-eslint/no-explicit-any */
export interface NewsFetch {
    code:    number;
    message: string;
    value:   Value[];
  }
  
  export interface Value {
    article_group_seq: number;
    list:              ArticleList[];
  }
  
  export interface ArticleList {
    channel_key:                 ChannelKey;
    board_seq:                   number;
    article_id:                  string;
    headline_info:               HeadlineInfo;
    fixed_yn:                    FixedYn;
    title:                       string;
    content:                     string;
    media_thumbnail_url:         string;
    media_count:                 number;
    user_interaction_score_info: null;
    create_datetime:             number;
    update_datetime:             number;
    article_status_code:         ArticleStatusCode;
    user_info:                   UserInfo;
    attach_summary_info:         AttachSummaryInfo;
    admin_option_summary_info:   AdminOptionSummaryInfo;
    subtitle?:                   string;
  }
  
  export interface AdminOptionSummaryInfo {
    notice_cancel_reservation_yn: FixedYn;
    publish_reservation_yn:       FixedYn;
    notice_position_code:         NoticePositionCode[];
    official_type_code:           OfficialTypeCode;
  }
  
  export enum FixedYn {
    N = 'N',
    Y = 'Y',
  }
  
  export enum NoticePositionCode {
    All = 'ALL',
  }
  
  export enum OfficialTypeCode {
    Notice = 'NOTICE',
  }
  
  export enum ArticleStatusCode {
    Published = 'PUBLISHED',
  }
  
  export interface AttachSummaryInfo {
    image_yn:       FixedYn;
    movie_yn:       FixedYn;
    poll_yn:        FixedYn;
    attach_file_yn: FixedYn;
    music_yn:       FixedYn;
    script_yn:      FixedYn;
  }
  
  export enum ChannelKey {
    Es = 'es',
  }
  
  export interface HeadlineInfo {
    headline_seq: number;
  }
  
  export interface UserInfo {
    member_no:           number;
    guid:                number;
    guid_guest_yn:       FixedYn;
    nickname:            Nickname;
    stove_nickname?:     string;
    profile_img:         string;
    status:              FixedYn;
    manager_yn:          FixedYn;
    grade_code:          GradeCode;
    channel_grade_code:  GradeCode;
    grade_badge:         GradeBadge;
    grade_badge_color:   GradeBadgeColor;
    grade_name:          GradeName;
    regist_yn:           FixedYn;
    snapshot_user_info?: UserInfo;
  }
  
  export enum GradeCode {
    Official = 'official',
  }
  
  export enum GradeBadge {
    Official = 'OFFICIAL',
  }
  
  export enum GradeBadgeColor {
    The3191F9 = '#3191F9',
  }
  
  export enum GradeName {
    주관리자 = '주관리자',
  }
  
  export enum Nickname {
    GMBaal = 'GM Baal',
  }