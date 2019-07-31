const cookieparser = process.server ? require('cookieparser') : undefined
export default{
    nuxtServerInit({commit, state}, {req}) {
        let auth = null;
        let userInfo = null;
        if (req.headers.cookie) {
           
          const parsed = cookieparser.parse(req.headers.cookie)
          console.log('parsed',parsed)
          try {
            auth = parsed.auth;
            userInfo = parsed.userInfo;
          } catch (err) {
            // No valid cookie found
          }
          commit('SET_TOKEN', auth);
          if(userInfo){
            commit('SET_USERINFO', JSON.parse(userInfo));
          }
        }
    }
}