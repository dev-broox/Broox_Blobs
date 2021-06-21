import _ from 'lodash';
import BrooxBlobs from './BrooxBlobs';

(function(){
    if(window.broox_blobs){return;}
    window.broox_blobs = new BrooxBlobs();
})();