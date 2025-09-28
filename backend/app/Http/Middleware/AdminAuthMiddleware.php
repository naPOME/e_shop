<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminAuthMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        $adminUsername = 'admin';
        $adminPassword = 'admin123';
        
        $username = $request->header('X-Admin-Username');
        $password = $request->header('X-Admin-Password');
        
        if ($username !== $adminUsername || $password !== $adminPassword) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        
        return $next($request);
    }
}
