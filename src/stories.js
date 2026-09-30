export const stories = [
 {slug:'beneath-the-trees',title:'Beneath the trees',category:'Wedding',cover:2,photos:[0,1,2,3,4],description:'A wedding portrait collection beneath the trees. Warm light, a white bouquet, and the moments shared between two people.',note:'Photographs by Joseph Saadeh.'},
 {slug:'the-wedding-day',title:'The wedding day',category:'Wedding',cover:7,photos:[5,6,7,8,9],description:'From the quiet preparations to the church and the journey together. A selection of portraits and details from the wedding day.',note:'Photographs by Joseph Saadeh.'},
 {slug:'wedding-moments',title:'Wedding moments',category:'Selected weddings',cover:12,photos:[10,11,12,13,14],description:'A selection from Joseph’s wedding photography. Bridal portraits, church architecture, evening light and the little moments in between.',note:'A curated collection from different shoots.'},
 {slug:'a-small-beginning',title:'A small beginning',category:'Baptism',cover:15,photos:[15,16,17,18,19],description:'A baptism remembered through family, faith and the smallest details. Gentle portraits sit alongside the ceremony and its setting.',note:'Photographs by Joseph Saadeh.'}
];
export const films = [
 {title:'A wedding, remembered',aspect:'16 / 9',duration:'00:18',caption:'Wedding highlights · 18 seconds'},
 {title:'Together, in golden light',aspect:'16 / 9',duration:'00:36',caption:'Wedding highlights · 36 seconds'},
 {title:'A celebration of faith',aspect:'9 / 16',duration:'01:04',caption:'Baptism film · 1 minute 4 seconds'},
 {title:'The people closest to us',aspect:'9 / 16',duration:'01:30',caption:'Baptism film · 1 minute 30 seconds'}
];
export const collections = {weddings:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],baptisms:[15,16,17,18,19],events:[],food:[]};
export const photoAlt = [
 'Bride and groom sharing a kiss beneath the trees',
 'Wedding bouquet and the couple’s hands',
 'Bride and groom smiling at each other',
 'Wedding portrait among wooden chairs and trees',
 'Bride and groom embracing beneath the trees',
 'Bride and groom beside their wedding car',
 'Groom portrait beneath the bride’s veil',
 'Bride and groom standing together in a brick church',
 'Bridal portrait in soft window light',
 'A collection of bridal preparations and jewellery details',
 'Bridal portrait inside a church',
 'Wedding portraits reflected in a car window',
 'Bride and groom beneath an evening sky',
 'Wedding portraits framed by church columns',
 'Couple silhouetted against a colourful evening sky',
 'Baby dressed for a baptism',
 'Flowers and decorations at a baptism celebration',
 'A close view of the baptism ceremony',
 'Baby lying on a white blanket in baptism clothing',
 'Baby at the altar during the baptism ceremony'
];
export const photoURL = id => `/assets/joseph-photo-${String(id).padStart(2,'0')}.jpg`;
