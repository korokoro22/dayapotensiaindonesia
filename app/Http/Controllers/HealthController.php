<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

/**
 * Lightweight readiness endpoint for hosting health checks.
 */
class HealthController extends Controller
{
    public function __invoke(): JsonResponse
    {
        return response()->json(['status' => 'ok']);
    }
}

