@@ .. @@
-    <section className="bg-white py-16">
-      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
+    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
+      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
+        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
           {stats.map((stat, index) => (
-            <div key={index}>
-              <div className="text-4xl font-extrabold text-blue-600">{stat.value}</div>
-              <div className="mt-2 text-base text-gray-600">{stat.label}</div>
+            <div key={index} className="group hover:transform hover:scale-110 transition-all duration-500">
+              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">{stat.value}</div>
+              <div className="text-base sm:text-lg lg:text-xl text-blue-100 font-semibold group-hover:text-white transition-colors duration-300">{stat.label}</div>
             </div>
           ))}
         </div>
@@ .. @@