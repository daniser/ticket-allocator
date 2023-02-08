<?php

declare(strict_types=1);

namespace TTBooking\TicketAllocator\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use TTBooking\TicketAllocator\Domain\Operator\Projections\Operator;
use TTBooking\TicketAllocator\Http\Requests\StoreOperatorRequest;
use TTBooking\TicketAllocator\Http\Requests\UpdateOperatorRequest;
use TTBooking\TicketAllocator\Http\Resources\OperatorResource;
use TTBooking\TicketAllocator\Http\Resources\OperatorTeamResource;
use TTBooking\TicketAllocator\Models\OperatorTeam;

class OperatorController extends Controller
{
    /**
     * Display a listing of the operators.
     *
     * @return InertiaResponse
     */
    public function index(): InertiaResponse
    {
        $operators = OperatorResource::collection(Operator::all())->resolve();

        return Inertia::render('Operator/Index', compact('operators'));
    }

    /**
     * Show the form for creating a new operator.
     *
     * @return InertiaResponse
     */
    public function create(): InertiaResponse
    {
        $teams = OperatorTeamResource::collection(OperatorTeam::all())->resolve();

        return Inertia::render('Operator/CreateEdit', compact('teams'));
    }

    /**
     * Store a newly created operator in storage.
     *
     * @param  \TTBooking\TicketAllocator\Http\Requests\StoreOperatorRequest  $request
     * @return RedirectResponse
     */
    public function store(StoreOperatorRequest $request): RedirectResponse
    {
        // TODO

        return Response::redirectToRoute('ticket-allocator.operators.index', status: 303);
    }

    /**
     * Display the specified operator.
     *
     * @param  \TTBooking\TicketAllocator\Domain\Operator\Projections\Operator  $operator
     * @return InertiaResponse
     */
    public function show(Operator $operator): InertiaResponse
    {
        $operator = new OperatorResource($operator->load('teams'));

        return Inertia::render('Operator/Show', compact('operator'));
    }

    /**
     * Show the form for editing the specified operator.
     *
     * @param  \TTBooking\TicketAllocator\Domain\Operator\Projections\Operator  $operator
     * @return InertiaResponse
     */
    public function edit(Operator $operator): InertiaResponse
    {
        $operator = new OperatorResource($operator->load('teams'));
        $teams = OperatorTeamResource::collection(OperatorTeam::all())->resolve();

        return Inertia::render('Operator/CreateEdit', compact('operator', 'teams'));
    }

    /**
     * Update the specified operator in storage.
     *
     * @param  \TTBooking\TicketAllocator\Http\Requests\UpdateOperatorRequest  $request
     * @param  \TTBooking\TicketAllocator\Domain\Operator\Projections\Operator  $operator
     * @return RedirectResponse
     */
    public function update(UpdateOperatorRequest $request, Operator $operator): RedirectResponse
    {
        // TODO

        return Response::redirectToRoute('ticket-allocator.operators.index', status: 303);
    }

    /**
     * Remove the specified operator from storage.
     *
     * @param  \TTBooking\TicketAllocator\Domain\Operator\Projections\Operator  $operator
     * @return RedirectResponse
     */
    public function destroy(Operator $operator): RedirectResponse
    {
        // TODO

        return Response::redirectToRoute('ticket-allocator.operators.index', status: 303);
    }
}
