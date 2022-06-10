import LucideIcons from "./lucide";


export default (app) => {

    for (const [key, icon] of Object.entries(LucideIcons)) {
        app.component(key, icon);
      }
}


