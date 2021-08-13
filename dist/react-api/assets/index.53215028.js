var Ve=Object.defineProperty,Le=Object.defineProperties;var Ue=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var Ge=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var M=(e,n,t)=>n in e?Ve(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,A=(e,n)=>{for(var t in n||(n={}))Ge.call(n,t)&&M(e,t,n[t]);if($)for(var t of $(n))He.call(n,t)&&M(e,t,n[t]);return e},N=(e,n)=>Le(e,Ue(n));import{D as _,a as $e,R as a,C as Me,b as Ye}from"./vendor.ba613e42.js";const xe="https://graphql.anilist.co",je=e=>e instanceof DOMException&&e.message==="Aborted";function we(e,n){const[t,s]=_.exports.useState(!0),[r,c]=_.exports.useState(!1),[o,i]=_.exports.useState(null),[l,d]=_.exports.useState(null),C=new AbortController;let R=async()=>{s(!0),c(!1),i(null);try{const D=await new $e.GraphQLClient(xe,{signal:C.signal}).request(e,n);d(D)}catch(D){console.log(D),je(D)||(c(!0),i(D))}finally{s(!1)}};return _.exports.useEffect(()=>(R().then(null,null),()=>{C.abort()}),[n]),{isLoading:t,isError:r,error:o,data:l}}var O={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Search"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"page"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"1"},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"perPage"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"5"},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"type"}},type:{kind:"NamedType",name:{kind:"Name",value:"MediaType"}},defaultValue:{kind:"EnumValue",value:"ANIME"},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"search"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sort"}},type:{kind:"ListType",type:{kind:"NamedType",name:{kind:"Name",value:"MediaSort"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Page"},arguments:[{kind:"Argument",name:{kind:"Name",value:"page"},value:{kind:"Variable",name:{kind:"Name",value:"page"}}},{kind:"Argument",name:{kind:"Name",value:"perPage"},value:{kind:"Variable",name:{kind:"Name",value:"perPage"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"pageInfo"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"media"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"Variable",name:{kind:"Name",value:"type"}}},{kind:"Argument",name:{kind:"Name",value:"search"},value:{kind:"Variable",name:{kind:"Name",value:"search"}}},{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"Variable",name:{kind:"Name",value:"sort"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"media"},directives:[]}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"pageInfo"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PageInfo"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"currentPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"perPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"media"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Media"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"title"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"format"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[{kind:"Argument",name:{kind:"Name",value:"version"},value:{kind:"IntValue",value:"2"}}],directives:[]},{kind:"Field",name:{kind:"Name",value:"countryOfOrigin"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"popularity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"averageScore"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meanScore"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startDate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"date"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"endDate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"date"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"isAdult"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"genres"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"duration"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"episodes"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"chapters"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coverImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"coverImage"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"studios"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"title"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MediaTitle"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"english"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"romaji"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"native"},arguments:[],directives:[]}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"coverImage"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MediaCoverImage"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"large"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"color"},arguments:[],directives:[]}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"date"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FuzzyDate"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"year"},arguments:[],directives:[]}]}}],loc:{start:0,end:887}};O.loc.source={body:`
    query Search($page: Int = 1, $perPage: Int = 5, $type: MediaType = ANIME, $search: String, $sort: [MediaSort]) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      ...pageInfo
    }
    media(type: $type, search: $search, sort: $sort) {
      ...media
    }
  }
}

fragment pageInfo on PageInfo {
  total
  currentPage
  lastPage
  perPage
  hasNextPage
}

fragment media on Media {
  id
  title {
    ...title
  }
  format
  status(version: 2)
  countryOfOrigin
  popularity
  averageScore
  meanScore
  startDate {
    ...date
  }
  endDate {
    ...date
  }
  isAdult
  genres
  duration
  episodes
  chapters
  coverImage {
    ...coverImage
  }
  studios {
    nodes {
      id
      name
    }
  }
}

fragment title on MediaTitle {
  english
  romaji
  native
}

fragment coverImage on MediaCoverImage {
  large
  color
}


fragment date on FuzzyDate {
  year
}

  `,name:"GraphQL request",locationOffset:{line:1,column:1}};function P(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var t=e.type;t.kind==="NamedType"&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(s){P(s,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(s){P(s,n)}),e.definitions&&e.definitions.forEach(function(s){P(s,n)})}var F={};(function(){O.definitions.forEach(function(n){if(n.name){var t=new Set;P(n,t),F[n.name.value]=t}})})();function Y(e,n){for(var t=0;t<e.definitions.length;t++){var s=e.definitions[t];if(s.name&&s.name.value==n)return s}}function We(e,n){var t={kind:e.kind,definitions:[Y(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var s=F[n]||new Set,r=new Set,c=new Set;for(s.forEach(function(i){c.add(i)});c.size>0;){var o=c;c=new Set,o.forEach(function(i){if(!r.has(i)){r.add(i);var l=F[i]||new Set;l.forEach(function(d){c.add(d)})}})}return r.forEach(function(i){var l=Y(e,i);l&&t.definitions.push(l)}),t}We(O,"Search");const ze="_paginator_1ksj6_1";var qe={paginator:ze};const Be="_results_zp10f_1",Je="_select-per-page_zp10f_10";var x={results:Be,"select-per-page":"_select-per-page_zp10f_10",selectPerPage:Je};const Ke=50,Qe=5,j=5,Xe=({pageInfo:e,onSelect:n})=>{const t=s=>{n(Number(s.currentTarget.value))};return a.createElement("div",{className:x.results},a.createElement("div",null,"Results (",e.total,"), per page:"),a.createElement("select",{className:x.selectPerPage,name:"per-page",value:e.perPage||10,onChange:t},Array(Ke/j).fill(Qe).map((s,r)=>s+r*j).map(s=>a.createElement("option",{key:s,value:s},s))))},Ze="_selector_1bzyb_1",en="_current_1bzyb_14",nn="_edge_1bzyb_18",an="_first_1bzyb_33",tn="_last_1bzyb_41";var S={selector:Ze,current:en,edge:nn,first:an,last:tn};function sn(e){return e.length===0?void 0:e[0]}function cn(e){return e.length===0?void 0:e[e.length-1]}const rn=(e,n,t)=>{let s=n-t+1;s=s<1?1:s;let r=t-1;r=r>n?n:r;const c=Math.floor(t/2);let o=e-c;o=o<1?1:o,o=o>s?s:o;let i=o+t-1;return i=i>n?n:i,i=i<r?r:i,Array(i+1-o).fill(o).map((l,d)=>l+d)},ln="_button_d7koq_1";var on={button:ln};const V=({page:e,disabled:n,onClick:t})=>a.createElement("button",{type:"button",className:on.button,disabled:n,onClick:()=>t(e)},e),En="_form_91rp4_1",mn="_input_91rp4_7",_n="_submit_91rp4_15";var f={form:En,input:mn,submit:_n};const un=({page:e,last:n,onChange:t})=>{const[s,r]=_.exports.useState(e),c=i=>{let l=+i.currentTarget.value;l=l>n?n:l,l=l<1?1:l,r(Math.ceil(l))},o=i=>{i.preventDefault(),t(s)};return a.createElement("form",{className:f.form,onSubmit:o},a.createElement("div",{className:f.form},a.createElement("input",{className:f.input,type:"number",value:s,min:1,max:n,step:1,required:!0,onInput:c}),a.createElement("button",{type:"submit",className:f.submit,disabled:s===e},s!==e&&"go")))},dn=5,Dn=({pageInfo:e,onSelect:n})=>{const t=e.currentPage||1,s=e.lastPage||1,r=rn(t,s,dn),c=sn(r)===1,o=cn(r)===s,i=l=>{n(l)};return a.createElement("ul",{className:S.selector},!c&&a.createElement("li",{className:`${S.edge} ${S.first}`},a.createElement(V,{page:1,onClick:i})),r.map(l=>a.createElement("li",{key:l},l===t?a.createElement(un,{page:l,last:s,onChange:i}):a.createElement(V,{page:l,onClick:i}))),!o&&a.createElement("li",{className:`${S.edge} ${S.last}`},a.createElement(V,{page:s,onClick:i})))},vn=({pageInfo:e,onPageSelect:n,onPerPageSelect:t})=>{if(!e.total||e.total===0)return a.createElement(a.Fragment,null);const s=c=>{n(c)},r=c=>{t(c)};return a.createElement("div",{className:qe.paginator},a.createElement(Dn,{pageInfo:e,onSelect:s}),a.createElement(Xe,{pageInfo:e,onSelect:r}))},In=({error:e})=>a.createElement("div",null,a.createElement("pre",null,a.createElement("code",null,JSON.stringify(e,null,2)))),pn=({error:e})=>e?e instanceof Me?a.createElement(In,{error:e}):e instanceof Error?a.createElement("div",null,e.message):typeof e=="string"?a.createElement("div",null,e):a.createElement("div",null,a.createElement("pre",null,a.createElement("code",null,JSON.stringify(e,null,2)))):a.createElement("div",null,"Unknown error"),gn="_card_f8xol_1",An="_container_f8xol_39",Nn="_genres_f8xol_47",Tn="_stats_f8xol_54";var h={card:gn,container:An,genres:Nn,stats:Tn};const Cn="_genres__list_uru1j_1",Sn="_genres__list_uru1j_1",kn="_genres__item_uru1j_1",Rn="_genres__item_uru1j_1";var w={genres__list:Cn,genresList:Sn,genres__item:kn,genresItem:Rn};const On=({genres:e})=>a.createElement("ul",{className:w.genres__list},e.map(n=>a.createElement("li",{key:n},a.createElement("div",{className:w.genres__item},n))));var W;(function(e){e.Id="ID",e.IdDesc="ID_DESC"})(W||(W={}));var z;(function(e){e.AnimeList="ANIME_LIST",e.MangaList="MANGA_LIST",e.MediaList="MEDIA_LIST",e.Message="MESSAGE",e.Text="TEXT"})(z||(z={}));var q;(function(e){e.Episode="EPISODE",e.EpisodeDesc="EPISODE_DESC",e.Id="ID",e.IdDesc="ID_DESC",e.MediaId="MEDIA_ID",e.MediaIdDesc="MEDIA_ID_DESC",e.Time="TIME",e.TimeDesc="TIME_DESC"})(q||(q={}));var B;(function(e){e.Background="BACKGROUND",e.Main="MAIN",e.Supporting="SUPPORTING"})(B||(B={}));var J;(function(e){e.Favourites="FAVOURITES",e.FavouritesDesc="FAVOURITES_DESC",e.Id="ID",e.IdDesc="ID_DESC",e.Relevance="RELEVANCE",e.Role="ROLE",e.RoleDesc="ROLE_DESC",e.SearchMatch="SEARCH_MATCH"})(J||(J={}));var K;(function(e){e.Activity="ACTIVITY",e.ActivityReply="ACTIVITY_REPLY",e.Thread="THREAD",e.ThreadComment="THREAD_COMMENT"})(K||(K={}));var I;(function(e){e.Manga="MANGA",e.Movie="MOVIE",e.Music="MUSIC",e.Novel="NOVEL",e.Ona="ONA",e.OneShot="ONE_SHOT",e.Ova="OVA",e.Special="SPECIAL",e.Tv="TV",e.TvShort="TV_SHORT"})(I||(I={}));var Q;(function(e){e.AddedTime="ADDED_TIME",e.AddedTimeDesc="ADDED_TIME_DESC",e.FinishedOn="FINISHED_ON",e.FinishedOnDesc="FINISHED_ON_DESC",e.MediaId="MEDIA_ID",e.MediaIdDesc="MEDIA_ID_DESC",e.MediaPopularity="MEDIA_POPULARITY",e.MediaPopularityDesc="MEDIA_POPULARITY_DESC",e.MediaTitleEnglish="MEDIA_TITLE_ENGLISH",e.MediaTitleEnglishDesc="MEDIA_TITLE_ENGLISH_DESC",e.MediaTitleNative="MEDIA_TITLE_NATIVE",e.MediaTitleNativeDesc="MEDIA_TITLE_NATIVE_DESC",e.MediaTitleRomaji="MEDIA_TITLE_ROMAJI",e.MediaTitleRomajiDesc="MEDIA_TITLE_ROMAJI_DESC",e.Priority="PRIORITY",e.PriorityDesc="PRIORITY_DESC",e.Progress="PROGRESS",e.ProgressDesc="PROGRESS_DESC",e.ProgressVolumes="PROGRESS_VOLUMES",e.ProgressVolumesDesc="PROGRESS_VOLUMES_DESC",e.Repeat="REPEAT",e.RepeatDesc="REPEAT_DESC",e.Score="SCORE",e.ScoreDesc="SCORE_DESC",e.StartedOn="STARTED_ON",e.StartedOnDesc="STARTED_ON_DESC",e.Status="STATUS",e.StatusDesc="STATUS_DESC",e.UpdatedTime="UPDATED_TIME",e.UpdatedTimeDesc="UPDATED_TIME_DESC"})(Q||(Q={}));var X;(function(e){e.Completed="COMPLETED",e.Current="CURRENT",e.Dropped="DROPPED",e.Paused="PAUSED",e.Planning="PLANNING",e.Repeating="REPEATING"})(X||(X={}));var Z;(function(e){e.Popular="POPULAR",e.Rated="RATED"})(Z||(Z={}));var ee;(function(e){e.Adaptation="ADAPTATION",e.Alternative="ALTERNATIVE",e.Character="CHARACTER",e.Compilation="COMPILATION",e.Contains="CONTAINS",e.Other="OTHER",e.Parent="PARENT",e.Prequel="PREQUEL",e.Sequel="SEQUEL",e.SideStory="SIDE_STORY",e.Source="SOURCE",e.SpinOff="SPIN_OFF",e.Summary="SUMMARY"})(ee||(ee={}));var ne;(function(e){e.Fall="FALL",e.Spring="SPRING",e.Summer="SUMMER",e.Winter="WINTER"})(ne||(ne={}));var u;(function(e){e.Chapters="CHAPTERS",e.ChaptersDesc="CHAPTERS_DESC",e.Duration="DURATION",e.DurationDesc="DURATION_DESC",e.EndDate="END_DATE",e.EndDateDesc="END_DATE_DESC",e.Episodes="EPISODES",e.EpisodesDesc="EPISODES_DESC",e.Favourites="FAVOURITES",e.FavouritesDesc="FAVOURITES_DESC",e.Format="FORMAT",e.FormatDesc="FORMAT_DESC",e.Id="ID",e.IdDesc="ID_DESC",e.Popularity="POPULARITY",e.PopularityDesc="POPULARITY_DESC",e.Score="SCORE",e.ScoreDesc="SCORE_DESC",e.SearchMatch="SEARCH_MATCH",e.StartDate="START_DATE",e.StartDateDesc="START_DATE_DESC",e.Status="STATUS",e.StatusDesc="STATUS_DESC",e.TitleEnglish="TITLE_ENGLISH",e.TitleEnglishDesc="TITLE_ENGLISH_DESC",e.TitleNative="TITLE_NATIVE",e.TitleNativeDesc="TITLE_NATIVE_DESC",e.TitleRomaji="TITLE_ROMAJI",e.TitleRomajiDesc="TITLE_ROMAJI_DESC",e.Trending="TRENDING",e.TrendingDesc="TRENDING_DESC",e.Type="TYPE",e.TypeDesc="TYPE_DESC",e.UpdatedAt="UPDATED_AT",e.UpdatedAtDesc="UPDATED_AT_DESC",e.Volumes="VOLUMES",e.VolumesDesc="VOLUMES_DESC"})(u||(u={}));var ae;(function(e){e.Anime="ANIME",e.Doujinshi="DOUJINSHI",e.LightNovel="LIGHT_NOVEL",e.Manga="MANGA",e.Novel="NOVEL",e.Original="ORIGINAL",e.Other="OTHER",e.VideoGame="VIDEO_GAME",e.VisualNovel="VISUAL_NOVEL"})(ae||(ae={}));var p;(function(e){e.Cancelled="CANCELLED",e.Finished="FINISHED",e.Hiatus="HIATUS",e.NotYetReleased="NOT_YET_RELEASED",e.Releasing="RELEASING"})(p||(p={}));var te;(function(e){e.Date="DATE",e.DateDesc="DATE_DESC",e.Episode="EPISODE",e.EpisodeDesc="EPISODE_DESC",e.Id="ID",e.IdDesc="ID_DESC",e.MediaId="MEDIA_ID",e.MediaIdDesc="MEDIA_ID_DESC",e.Popularity="POPULARITY",e.PopularityDesc="POPULARITY_DESC",e.Score="SCORE",e.ScoreDesc="SCORE_DESC",e.Trending="TRENDING",e.TrendingDesc="TRENDING_DESC"})(te||(te={}));var se;(function(e){e.Anime="ANIME",e.Manga="MANGA"})(se||(se={}));var ce;(function(e){e.Anon="ANON",e.Ban="BAN",e.Delete="DELETE",e.Edit="EDIT",e.Expire="EXPIRE",e.Note="NOTE",e.Report="REPORT",e.Reset="RESET"})(ce||(ce={}));var re;(function(e){e.Admin="ADMIN",e.AnimeData="ANIME_DATA",e.Community="COMMUNITY",e.Developer="DEVELOPER",e.DiscordCommunity="DISCORD_COMMUNITY",e.LeadAnimeData="LEAD_ANIME_DATA",e.LeadCommunity="LEAD_COMMUNITY",e.LeadDeveloper="LEAD_DEVELOPER",e.LeadMangaData="LEAD_MANGA_DATA",e.LeadSocialMedia="LEAD_SOCIAL_MEDIA",e.MangaData="MANGA_DATA",e.Retired="RETIRED",e.SocialMedia="SOCIAL_MEDIA"})(re||(re={}));var ie;(function(e){e.ActivityLike="ACTIVITY_LIKE",e.ActivityMention="ACTIVITY_MENTION",e.ActivityMessage="ACTIVITY_MESSAGE",e.ActivityReply="ACTIVITY_REPLY",e.ActivityReplyLike="ACTIVITY_REPLY_LIKE",e.ActivityReplySubscribed="ACTIVITY_REPLY_SUBSCRIBED",e.Airing="AIRING",e.Following="FOLLOWING",e.RelatedMediaAddition="RELATED_MEDIA_ADDITION",e.ThreadCommentLike="THREAD_COMMENT_LIKE",e.ThreadCommentMention="THREAD_COMMENT_MENTION",e.ThreadCommentReply="THREAD_COMMENT_REPLY",e.ThreadLike="THREAD_LIKE",e.ThreadSubscribed="THREAD_SUBSCRIBED"})(ie||(ie={}));var le;(function(e){e.NoRating="NO_RATING",e.RateDown="RATE_DOWN",e.RateUp="RATE_UP"})(le||(le={}));var oe;(function(e){e.Id="ID",e.IdDesc="ID_DESC",e.Rating="RATING",e.RatingDesc="RATING_DESC"})(oe||(oe={}));var Ee;(function(e){e.DownVote="DOWN_VOTE",e.NoVote="NO_VOTE",e.UpVote="UP_VOTE"})(Ee||(Ee={}));var me;(function(e){e.CreatedAt="CREATED_AT",e.CreatedAtDesc="CREATED_AT_DESC",e.Id="ID",e.IdDesc="ID_DESC",e.Rating="RATING",e.RatingDesc="RATING_DESC",e.Score="SCORE",e.ScoreDesc="SCORE_DESC",e.UpdatedAt="UPDATED_AT",e.UpdatedAtDesc="UPDATED_AT_DESC"})(me||(me={}));var _e;(function(e){e.Create="CREATE",e.Edit="EDIT"})(_e||(_e={}));var ue;(function(e){e.Point_10="POINT_10",e.Point_100="POINT_100",e.Point_10Decimal="POINT_10_DECIMAL",e.Point_3="POINT_3",e.Point_5="POINT_5"})(ue||(ue={}));var de;(function(e){e.Change="CHANGE",e.ChangeDesc="CHANGE_DESC",e.Count="COUNT",e.CountDesc="COUNT_DESC",e.Date="DATE",e.DateDesc="DATE_DESC"})(de||(de={}));var De;(function(e){e.English="ENGLISH",e.French="FRENCH",e.German="GERMAN",e.Hebrew="HEBREW",e.Hungarian="HUNGARIAN",e.Italian="ITALIAN",e.Japanese="JAPANESE",e.Korean="KOREAN",e.Portuguese="PORTUGUESE",e.Spanish="SPANISH"})(De||(De={}));var ve;(function(e){e.Favourites="FAVOURITES",e.FavouritesDesc="FAVOURITES_DESC",e.Id="ID",e.IdDesc="ID_DESC",e.Language="LANGUAGE",e.LanguageDesc="LANGUAGE_DESC",e.Relevance="RELEVANCE",e.Role="ROLE",e.RoleDesc="ROLE_DESC",e.SearchMatch="SEARCH_MATCH"})(ve||(ve={}));var Ie;(function(e){e.Favourites="FAVOURITES",e.FavouritesDesc="FAVOURITES_DESC",e.Id="ID",e.IdDesc="ID_DESC",e.Name="NAME",e.NameDesc="NAME_DESC",e.SearchMatch="SEARCH_MATCH"})(Ie||(Ie={}));var pe;(function(e){e.Id="ID",e.IdDesc="ID_DESC"})(pe||(pe={}));var ge;(function(e){e.Accepted="ACCEPTED",e.PartiallyAccepted="PARTIALLY_ACCEPTED",e.Pending="PENDING",e.Rejected="REJECTED"})(ge||(ge={}));var Ae;(function(e){e.Id="ID",e.IdDesc="ID_DESC"})(Ae||(Ae={}));var Ne;(function(e){e.CreatedAt="CREATED_AT",e.CreatedAtDesc="CREATED_AT_DESC",e.Id="ID",e.IdDesc="ID_DESC",e.IsSticky="IS_STICKY",e.RepliedAt="REPLIED_AT",e.RepliedAtDesc="REPLIED_AT_DESC",e.ReplyCount="REPLY_COUNT",e.ReplyCountDesc="REPLY_COUNT_DESC",e.SearchMatch="SEARCH_MATCH",e.Title="TITLE",e.TitleDesc="TITLE_DESC",e.UpdatedAt="UPDATED_AT",e.UpdatedAtDesc="UPDATED_AT_DESC",e.ViewCount="VIEW_COUNT",e.ViewCountDesc="VIEW_COUNT_DESC"})(Ne||(Ne={}));var Te;(function(e){e.ChaptersRead="CHAPTERS_READ",e.ChaptersReadDesc="CHAPTERS_READ_DESC",e.Id="ID",e.IdDesc="ID_DESC",e.SearchMatch="SEARCH_MATCH",e.Username="USERNAME",e.UsernameDesc="USERNAME_DESC",e.WatchedTime="WATCHED_TIME",e.WatchedTimeDesc="WATCHED_TIME_DESC"})(Te||(Te={}));var Ce;(function(e){e.Native="NATIVE",e.Romaji="ROMAJI",e.RomajiWestern="ROMAJI_WESTERN"})(Ce||(Ce={}));var Se;(function(e){e.Count="COUNT",e.CountDesc="COUNT_DESC",e.Id="ID",e.IdDesc="ID_DESC",e.MeanScore="MEAN_SCORE",e.MeanScoreDesc="MEAN_SCORE_DESC",e.Progress="PROGRESS",e.ProgressDesc="PROGRESS_DESC"})(Se||(Se={}));var ke;(function(e){e.English="ENGLISH",e.EnglishStylised="ENGLISH_STYLISED",e.Native="NATIVE",e.NativeStylised="NATIVE_STYLISED",e.Romaji="ROMAJI",e.RomajiStylised="ROMAJI_STYLISED"})(ke||(ke={}));const Pn="_format_6rqa5_1";var fn={format:Pn};const hn=e=>e>1?"s":"",L=(e,n)=>e&&` \u2022 ${e} ${n}${hn(e)}`||void 0,yn=({media:e})=>{if(!e.format)return a.createElement(a.Fragment,null);let n;switch(e.format){case I.Manga:case I.Novel:case I.OneShot:n=L(e.chapters,"chapter");break;case I.Movie:case I.Music:n=L(e.duration,"min");break;default:n=L(e.episodes,"episode");break}return a.createElement("div",{className:fn.format},e.format.split("_").join(" "),n)},bn="_svg_140g8_1";var Fn={svg:bn};const Vn=({src:e,name:n,prefix:t="",fill:s})=>a.createElement("svg",{className:Fn.svg,style:{fill:s}},a.createElement("use",{href:`${e}#${t}${n}`})),y=(e,n)=>({name:t,fill:s})=>a.createElement(Vn,{src:e,name:t,prefix:n,fill:s});var U="./assets/icons.21512942.svg",Ln="./assets/flags.0329f4fe.svg";const Un=new Map([["JP","japan"],["KR","south-korea"],["CN","china"],["TW","taiwan"]]);function Re(e){return n=>n&&e.get(n)}const Gn="_cover_mj6mc_1",Hn="_cover__image_mj6mc_1",$n="_cover__image_mj6mc_1",Mn="_plus-18_mj6mc_22",Yn="_status_mj6mc_37",xn="_overlay_mj6mc_66",jn="_flag_mj6mc_81",wn="_year_mj6mc_86";var g={cover:Gn,cover__image:Hn,coverImage:$n,"plus-18":"_plus-18_mj6mc_22",plus18:Mn,status:Yn,overlay:xn,flag:jn,year:wn};const Wn=y(U),zn=y(Ln),qn=new Map([[p.NotYetReleased,{text:"Announced",color:"#ff0"}],[p.Releasing,{text:"Ongoing",color:"#f80"}],[p.Hiatus,{text:"Paused",color:"#888"}],[p.Cancelled,{text:"Cancelled",color:"#333"}],[p.Finished,{text:"Completed",color:"#08f"}]]),Bn=Re(qn),Jn=Re(Un),Kn=({media:e})=>{var s,r,c;const n=Jn(e.countryOfOrigin),t=Bn(e.status);return e.coverImage?a.createElement("div",{className:g.cover},e.coverImage.large&&a.createElement("img",{className:g.cover__image,src:e.coverImage.large,alt:((s=e.title)==null?void 0:s.english)||((r=e.title)==null?void 0:r.native)||"cover"}),e.isAdult&&a.createElement("div",{className:g.plus18},a.createElement(Wn,{name:"18-plus"})),t&&a.createElement("div",{className:g.status,style:{"--color":t.color}},t.text),a.createElement("div",{className:g.overlay},n&&a.createElement("div",{className:g.flag,title:n},a.createElement(zn,{name:n})),((c=e.startDate)==null?void 0:c.year)&&a.createElement("div",{className:g.year},e.startDate.year))):a.createElement(a.Fragment,null)},Qn="_header_1i51z_1",Xn="_title_1i51z_10",Zn="_studio_1i51z_19";var G={header:Qn,title:Xn,studio:Zn};const ea="_info_ifgyn_1",na="_icon_ifgyn_7";var Oe={info:ea,icon:na};const aa=y(U),H=({info:e,icon:n})=>{const t=typeof e=="number"?Number(e).toLocaleString():e;return a.createElement("div",{className:Oe.info},a.createElement("div",{className:Oe.icon},a.createElement(aa,{name:n})),a.createElement("div",null,t))},ta=e=>`${e.romaji||""}
${e.english||""}
${e.native||""}`,sa=({media:e})=>{var n,t;return e.title?a.createElement("div",{className:G.header,title:ta(e.title)},a.createElement("div",{className:G.title},e.title.romaji),a.createElement("div",{className:G.studio},((t=(n=e.studios)==null?void 0:n.nodes)==null?void 0:t[0])&&a.createElement(H,{info:e.studios.nodes[0].name,icon:"home"}))):a.createElement(a.Fragment,null)},ca=({media:e})=>{var n,t,s;return a.createElement("div",{className:h.card,style:{"--card-bg-c":((n=e.coverImage)==null?void 0:n.color)||"#fff","--card-bg-i":((t=e.coverImage)==null?void 0:t.large)&&`url(${(s=e.coverImage)==null?void 0:s.large})`||"unset"}},a.createElement(Kn,{media:e}),a.createElement("div",{className:h.container},a.createElement(sa,{media:e}),a.createElement(yn,{media:e}),e.genres&&a.createElement("div",{className:h.genres},a.createElement(On,{genres:e.genres})),a.createElement("div",{className:h.stats},e.averageScore&&a.createElement(H,{info:e.averageScore/10,icon:"star"}),e.popularity&&a.createElement(H,{info:e.popularity,icon:"people"}))))},ra="_cards_2n8md_1";var ia={cards:ra};const la=({mediaFragments:e})=>a.createElement("ul",{className:ia.cards},e.map(n=>n&&a.createElement("li",{key:n==null?void 0:n.id},a.createElement(ca,{media:n})))),oa="_search-bar_x1zoc_1",Ea="_search_x1zoc_1",ma="_search__input_x1zoc_1",_a="_search__input_x1zoc_1",ua="_search__button_x1zoc_1",da="_search__button_x1zoc_1";var b={"search-bar":"_search-bar_x1zoc_1",searchBar:oa,search:Ea,search__input:ma,searchInput:_a,search__button:ua,searchButton:da};const Da=({onSubmit:e})=>{const[n,t]=_.exports.useState(""),s=c=>{c.preventDefault(),e(n),t("")},r=c=>{t(c.currentTarget.value)};return a.createElement("div",{className:b.searchBar},a.createElement("form",{onSubmit:s},a.createElement("div",{className:b.search},a.createElement("input",{className:b.search__input,type:"text",value:n,placeholder:"hero",onInput:r}),a.createElement("button",{className:b.search__button,type:"submit"},"search"))))};var E;(function(e){e.NONE="none",e.ASC="asc",e.DESC="desc"})(E||(E={}));function va(e){switch(e){case E.NONE:return E.DESC;case E.DESC:return E.ASC;case E.ASC:return E.NONE}}const Pe=e=>e.reduce((n,t)=>(n[t]=E.NONE,n),{}),Ia="_button_3gqcr_1",pa="_order_3gqcr_18",ga="_icon_3gqcr_24",Aa="_icon--active_3gqcr_1";var T={button:Ia,order:pa,icon:ga,"icon--active":"_icon--active_3gqcr_1",iconActive:Aa};const fe=y(U),Na=({name:e,value:n,onChange:t})=>{const s=n===E.ASC?T.iconActive:"",r=n===E.DESC?T.iconActive:"",c=()=>{t(e,va(n))};return a.createElement("div",null,a.createElement("button",{className:T.button,type:"button",onClick:c},e,a.createElement("div",{className:T.order},a.createElement("div",{className:`${T.icon} ${s}`},a.createElement(fe,{name:"caret-up"})),a.createElement("div",{className:`${T.icon} ${r}`},a.createElement(fe,{name:"caret-down"})))))},Ta="_group_1vjou_1",Ca="_item_1vjou_12";var Sa={group:Ta,item:Ca};const ka=({names:e,onChange:n})=>{const[t,s]=_.exports.useState(Pe(e)),r=(c,o)=>{s(()=>N(A({},Pe(e)),{[c]:o}))};return _.exports.useEffect(()=>{n(t)},[t]),a.createElement("ul",{className:Sa.group},e.map(c=>a.createElement("li",{key:c},a.createElement(Na,{name:c,value:t[c],onChange:r}))))},he=new Map([["Popularity",new Map([[E.ASC,u.Popularity],[E.DESC,u.PopularityDesc]])],["Score",new Map([[E.ASC,u.Score],[E.DESC,u.ScoreDesc]])],["Release date",new Map([[E.ASC,u.StartDate],[E.DESC,u.StartDateDesc]])],["Title",new Map([[E.ASC,u.TitleRomaji],[E.DESC,u.TitleRomajiDesc]])]]),Ra=e=>Object.entries(e).map(([n,t])=>{var s;return(s=he.get(n))==null?void 0:s.get(t)}).filter(n=>n!==void 0),Oa="_full-loader_z76bm_1",Pa="_loading_z76bm_1";var fa={"full-loader":"_full-loader_z76bm_1",fullLoader:Oa,loading:Pa};const ye=()=>a.createElement("div",{className:fa.fullLoader}),ha="_app_1o7as_1",ya="_search-wrapper_1o7as_4",ba="_paginator-wrapper_1o7as_14",Fa="_state-wrapper_1o7as_18";var k={app:ha,"search-wrapper":"_search-wrapper_1o7as_4",searchWrapper:ya,"paginator-wrapper":"_paginator-wrapper_1o7as_14",paginatorWrapper:ba,"state-wrapper":"_state-wrapper_1o7as_18",stateWrapper:Fa};const be=e=>{var n,t,s;return(((s=(t=(n=e.data)==null?void 0:n.Page)==null?void 0:t.pageInfo)==null?void 0:s.total)||0)>0};function Va(){var d,C,R,D;const[e,n]=_.exports.useState({page:1,perPage:10,sort:[]}),t=we(O,e),s=m=>{console.log("Selected page:",m),n(v=>N(A({},v),{page:m}))},r=m=>{console.log("Selected results per page:",m),n(v=>N(A({},v),{page:1,perPage:m}))},c=((C=(d=t.data)==null?void 0:d.Page)==null?void 0:C.pageInfo)&&a.createElement("div",{className:k.paginatorWrapper},a.createElement(vn,{pageInfo:t.data.Page.pageInfo,onPageSelect:s,onPerPageSelect:r}),t.isLoading&&a.createElement(ye,null)),o=m=>{console.log("Search:",m),n(v=>N(A({},v),{page:1,search:m||void 0}))},i=m=>{const v=Ra(m);console.log("Order by:",v),n(Fe=>N(A({},Fe),{page:1,sort:v}))},l=a.createElement("div",{className:k.searchWrapper},a.createElement(Da,{onSubmit:o}),be(t)&&a.createElement(ka,{names:[...he.keys()],onChange:i}),t.isLoading&&a.createElement(ye,null));return a.createElement("div",{className:k.app},l,a.createElement("div",null,a.createElement("div",{className:k.stateWrapper},t.isError&&a.createElement(pn,{error:t.error})),!t.isLoading&&!be(t)&&a.createElement("div",{className:k.searchWrapper},'\uFF08\uFF1E\u4EBA\uFF1C\uFF1B\uFF09 No results for query: "',e.search,'"'),c,((D=(R=t.data)==null?void 0:R.Page)==null?void 0:D.media)&&a.createElement(la,{mediaFragments:t.data.Page.media}),c))}const La=()=>{const e=document.createElement("div");e.id="root",document.body.append(e),Ye.render(a.createElement(a.StrictMode,null,a.createElement(Va,null)),e)};La();
