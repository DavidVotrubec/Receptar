using System.Web.Optimization;

namespace Receptar
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/base").Include(
                            "~/Scripts/underscore-min.js",
                            "~/Scripts/angular.js",
                            "~/Scripts/angular-animate.js",
                            "~/Scripts/angular-resource.js",
                            "~/Scripts/angular-route.js"
                        )
                        .IncludeDirectory("~/Scripts/RecipesApp", "*.js", true));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css"));
        }
    }
}