/**
 * Created by Administrator on 2017/7/2 0002.
 */
exports.getMime=function(extname){  /*获取后缀名的方法*/

    switch (extname){

        case '.html':

            return 'text/html';
        case '.css':

            return 'text/css';

        case '.js':

            return 'text/javascript';

        default:
            return 'text/html';
    }

}