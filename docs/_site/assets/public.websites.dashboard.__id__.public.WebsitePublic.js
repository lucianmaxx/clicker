skit.define("public.websites.dashboard.__id__.public.WebsitePublic:js", ["skit.platform.Controller:js","skit.platform.navigation:js"], function() {  return ((function(skit_platform_Controller,skit_platform_navigation) { var module = {exports: {}}; var defined = null; function define() {   for (var i = 0; i < arguments.length; i++) {     if (typeof arguments[i] == 'function') { defined = arguments[i](); break; }   } } define.amd = true; var result = (function public_websites_dashboard___id___public_WebsitePublic_js() {/**
 * @license
 * Copyright 2016 Cluster Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var Controller = skit_platform_Controller;
var navigation = skit_platform_navigation;


module.exports = Controller.create({
  __preload__: function(done) {
    var url = '/websites/' + this.params['__id__'] + '/';
    navigation.navigate(url);
    done();
  }
});


})(); return result || defined || module.exports; })).apply(this, arguments)});